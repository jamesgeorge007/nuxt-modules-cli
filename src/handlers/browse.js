const { prompt } = require("inquirer");
const nuxtModules = require("@nuxt/modules");

const fetchModuleInfo = require("./helpers");

const browseEntireList = async () => {
  const { module } = await prompt({
    type: "list",
    name: "module",
    message: "Pick a module to know more",
    choices: nuxtModules,
  });

  // Display the information associated with the respective Nuxt.js module
  fetchModuleInfo(module);
};

module.exports = browseEntireList;
