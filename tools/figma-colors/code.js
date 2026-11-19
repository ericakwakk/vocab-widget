const COLLECTION_NAME = "Vocab Widget Poster";

const colors = {
  ink: "#14110F",
  "paper/1 Monday": "#FF3B57",
  "paper/2 Tuesday": "#7CFFB0",
  "paper/3 Wednesday": "#B57BFF",
  "paper/4 Thursday": "#E8FF5A",
  "paper/5 Friday": "#2F86FF",
  "paper/6 Saturday": "#FFB3CB",
  "paper/7 Sunday": "#8FD9EC",
};

function toFigmaColor(hex) {
  const channel = (start) => parseInt(hex.slice(start, start + 2), 16) / 255;
  return { r: channel(1), g: channel(3), b: channel(5) };
}

async function run() {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const variables = await figma.variables.getLocalVariablesAsync("COLOR");

  const collection =
    collections.find((candidate) => candidate.name === COLLECTION_NAME) ||
    figma.variables.createVariableCollection(COLLECTION_NAME);
  const modeId = collection.modes[0].modeId;

  for (const [name, hex] of Object.entries(colors)) {
    const variable =
      variables.find(
        (candidate) =>
          candidate.name === name &&
          candidate.variableCollectionId === collection.id,
      ) || figma.variables.createVariable(name, collection, "COLOR");
    variable.setValueForMode(modeId, toFigmaColor(hex));
  }

  return "Added the Vocab Widget Poster colors.";
}

run()
  .then((message) => figma.closePlugin(message))
  .catch((error) => figma.closePlugin(`Could not add colors: ${error.message}`));
