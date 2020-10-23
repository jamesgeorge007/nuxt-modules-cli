const { prompt } = require("inquirer");
const nuxtModules = require("@nuxt/modules");
const showBanner = require("node-banner");
const terminalLink = require("terminal-link");

const Table = require("cli-table3");

const browseModules = async () => {
  // const categories = [...new Set(nuxtModules.map(({ category }) => category))];
  // const types = [...new Set(nuxtModules.map(({ type }) => type))];

  const table = new Table({
    head: ["Type", "Link"],
  });

  const { module } = await prompt({
    type: "list",
    name: "module",
    choices: nuxtModules,
  });

  const moduleInfo = nuxtModules.find(({ name }) => name === module);
  await showBanner(moduleInfo.name, moduleInfo.description, "green", "white");

  console.log();
  console.log(`🌟 Type: ${moduleInfo.type}`);
  console.log(`🌟 Category: ${moduleInfo.category}`);
  console.log();

  table.push(
    ["website", terminalLink(moduleInfo.website)],
    ["npm page", terminalLink(`https://npmjs.com/package/${moduleInfo.npm}`)],
    ["GitHub Repository", terminalLink(moduleInfo.github)],
  );

  console.log(table.toString());
  console.log();

  if (moduleInfo.learn_more) {
    console.log(`💁 Learn more ${terminalLink("here", moduleInfo.learn_more)}`);
    console.log();
  }

  console.log("🧰 Maintainers");
  console.log();

  moduleInfo.maintainers.forEach(({ name, github }) => {
    console.log(` 👉 ${terminalLink(name, `https://github.com/${github}`)}`);
  });
};

module.exports = browseModules;
