import { fakeNews } from "./data";
import List from "./partials/list";

type Article = {
  title: string;
  body: string;
};

export default () => {
  return (
    <>
      <div style={{ border: "1px solid black", height: "50vh" }}>
        <List<Article>
          data={fakeNews}
          virtual
          style={{ height: "100%" }}
          rowHeight={150}
          itemRenderer={(item) => (
            <>
              <h2 style={{ margin: "0", marginBottom: "0.5rem" }}>
                {item.title}
              </h2>
              <span>{item.body}</span>
            </>
          )}
        />
      </div>
    </>
  );
};
