export const fakeNews = <{ title: string; body: string }[]>[];

for (let i = 0; i < 50; i++) {
  const title = generateFakeTitle();
  const body = generateFakeBody();
  fakeNews.push({ title, body });
}

function generateFakeTitle() {
  const prefixes = ["Breaking:", "Exclusive:", "New report:"];
  const subjects = ["Scientists", "Experts", "Researchers", "Sources"];
  const actions = ["discover", "find", "uncover", "reveal"];
  const topics = [
    "new species",
    "aliens",
    "chocolate",
    "secret government program",
  ];
  const suffixes = [
    "on Mars",
    "in the Amazon rainforest",
    "in new study",
    "in shocking report",
  ];

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];
  const topic = topics[Math.floor(Math.random() * topics.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return `${prefix} ${subject} ${action} ${topic} ${suffix}`;
}

function generateFakeBody() {
  const sentences = [
    "The discovery has stunned the scientific community.",
    "Experts say this could be a major breakthrough in our understanding of the universe.",
    "Critics are skeptical of the findings and call for further research.",
    "The study has raised concerns about the impact of chocolate on public health.",
    "The government denies any involvement in the program and calls the report 'baseless.'",
    "Sources say the aliens are peaceful and pose no threat to Earth.",
    "The spider is believed to be the largest species ever discovered.",
    "Some researchers speculate that the finding could have implications for the search for extraterrestrial life.",
    "The study has sparked controversy and calls for greater regulation of the chocolate industry.",
    "The discovery has reignited the debate over the existence of life on other planets.",
  ];

  const numSentences = Math.floor(Math.random() * 3) + 2; // generate between 2 and 4 sentences
  const chosenSentences = [];

  for (let i = 0; i < numSentences; i++) {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    chosenSentences.push(sentences[randomIndex]);
  }

  return chosenSentences.join(" ");
}
