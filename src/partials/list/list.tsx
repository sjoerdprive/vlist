import {
  CSSProperties,
  UIEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Virtualize from "../../components/virtualize";

interface ListProps<T> {
  data: T[];
  rowHeight: number;
  style?: CSSProperties;
  virtual?: boolean;
  listItemStyle?: CSSProperties;
  itemRenderer: (item: T) => React.ReactNode;
}

export const List = <T,>({
  data,
  rowHeight,
  style,
  virtual,
  itemRenderer,
  listItemStyle: extraListItemStyle,
}: ListProps<T>) => {
  const listWindow = useRef<HTMLUListElement>(null);
  const list = useRef<HTMLUListElement>(null);

  const [top, setTop] = useState(0);
  const [viewHeight, setViewHeight] = useState(0);

  useEffect(() => {
    if (listWindow.current) {
      setViewHeight(listWindow.current?.clientHeight);
      console.log({ viewHeight });
    }
  }, [listWindow]);

  const rowCount = useMemo(() => {
    return data.length;
  }, [data]);

  const handleScroll: UIEventHandler = useCallback(
    (e) => {
      setTop(e.currentTarget.scrollTop);
      console.log("scroll handled");
    },
    [list]
  );

  const virtualItemStyle: CSSProperties = useMemo(
    () => ({
      position: "absolute",
      display: "flex",
      alignContent: "stretch",
      height: rowHeight,
      width: "100%",
    }),
    []
  );

  const listStyle: CSSProperties = useMemo(
    () => ({
      listStyle: "none",
      border: "1px solid black",
      margin: 0,
      padding: 0,
      overflow: "scroll",
      position: "relative",
    }),
    []
  );

  return (
    <ul
      style={{ ...listStyle, ...style }}
      onScroll={handleScroll}
      ref={listWindow}
    >
      <div role="presentation" style={{ height: rowCount * rowHeight }}>
        {data.map((item, i) => {
          if (virtual) {
            const y = i * rowHeight;
            const isInView = y >= top - rowHeight && y <= top + viewHeight;
            if (!isInView) return null;
          }
          return (
            <li
              key={i}
              role="presentation"
              style={{
                ...virtualItemStyle,
                top: i * rowHeight,
              }}
            >
              <div>{itemRenderer(item)}</div>
            </li>
          );
        })}
      </div>
    </ul>
  );
};
