const { prompt } = require('inquirer');
const nuxtModules = require("@nuxt/modules");

const fetchModuleInfo = require('./helpers');

const filteredSearch = async () => {
  const { filterCriteria } = await prompt({
    type: "list",
    name: "filterCriteria",
    message: "Choose the filteration criteria",
    choices: ["By Type", "By Category"],
  });

  if (filterCriteria.includes("Type")) {
    // Choose between the available module types (distinct values)
    const moduleTypes = [...new Set(nuxtModules.map(({ type }) => type))];
    const { moduleType } = await prompt({
      type: "list",
      name: "moduleType",
      message: "Choose from below",
      choices: moduleTypes,
    });

    // Fetch the modules that fall under the chosen type
    const choices = nuxtModules.filter(({ type }) => type === moduleType);

    const { module } = await prompt({
      type: "list",
      name: "module",
      message: "Choose from below",
      choices,
    });

    // Display the information associated with the respective Nuxt.js module
    fetchModuleInfo(module);
  } else {
    // Choose between the available module category (distinct values)
    const moduleCategories = [...new Set(nuxtModules.map(({ category }) => category))];

    const { moduleCategory } = await prompt({
      type: "list",
      name: "moduleCategory",
      message: "Choose from below",
      choices: moduleCategories,
    });

    // Fetch the modules that fall under the chosen category
    const choices = nuxtModules.filter(({ category }) => category === moduleCategory);

    const { module } = await prompt({
      type: "list",
      name: "module",
      message: "Choose from below",
      choices,
    });

    // Display the information associated with the respective Nuxt.js module
    fetchModuleInfo(module);
  }
};

module.exports = filteredSearch;
