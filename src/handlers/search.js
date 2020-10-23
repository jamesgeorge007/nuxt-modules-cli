const { prompt, registerPrompt, Separator } = require("inquirer");
const fuzzy = require("fuzzy");
const nuxtModules = require("@nuxt/modules");

registerPrompt("autocomplete", require("inquirer-autocomplete-prompt"));

const fetchModuleInfo = require("./helpers");

const searchModules = (answers, input) => {
  input = input || "";
  return new Promise((resolve) => {
    setTimeout(() => {
      const fuzzyResult = fuzzy.filter(
        input,
        nuxtModules.map(({ name }) => name),
      );
      const results = fuzzyResult.map(({ original }) => original);

      // results.splice(5, 0, new Separator());
      results.push(new Separator());
      resolve(results);
    }, Math.random() * 500);
  });
};

const searchModule = async () => {
  const { module } = await prompt({
    type: "autocomplete",
    name: "module",
    message: "Search a module",
    source: searchModules,
  });

  // Display the information associated with the respective Nuxt.js module
  fetchModuleInfo(module);
};

module.exports = searchModule;
