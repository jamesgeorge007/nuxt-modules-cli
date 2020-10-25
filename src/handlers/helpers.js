const nuxtModules = require("@nuxt/modules");
const showBanner = require("node-banner");
const terminalLink = require("terminal-link");

const Table = require("cli-table3");

const fetchModuleInfo = async (moduleName) => {
  // Fetch information specific to the opted Nuxt.js module
  const moduleInfo = nuxtModules.find(({ name }) => name === moduleName);

  // Show up an ASCII banner with the module name and description
  await showBanner(moduleInfo.name, moduleInfo.description, "green", "white");

  console.log();
  console.log(`🌟 Type: ${moduleInfo.type}`);
  console.log(`🌟 Category: ${moduleInfo.category}`);
  console.log();

  // Instantiate
  const table = new Table({
    head: ["Type", "Link"],
  });

  const npmPageUrl = `https://npmjs.com/package/${moduleInfo.npm}`;

  table.push(
    [
      "website",
      terminalLink(moduleInfo.website, moduleInfo.website, { fallback: false }),
    ],
    ["npm page", terminalLink(npmPageUrl, npmPageUrl, { fallback: false })],
    [
      "GitHub Repository",
      terminalLink(moduleInfo.github, moduleInfo.github, { fallback: false }),
    ],
  );

  console.log(table.toString());
  console.log();

  // Some of the Nuxt.js modules doesn't have learn_more link associated with it
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

module.exports = fetchModuleInfo;
