const { prompt } = require("inquirer");

// Handlers
const browseEntireList = require("./handlers/browse");
const filteredSearch = require("./handlers/filter");
const searchModule = require("./handlers/search");

const browseModules = async () => {
  // const categories = [...new Set(nuxtModules.map(({ category }) => category))];
  // const types = [...new Set(nuxtModules.map(({ type }) => type))];

  const { choice } = await prompt({
    type: "list",
    name: "choice",
    message: "Choose from below",
    choices: [
      "Browse the entire list",
      "Search for a module",
      "Apply filters (Type/Category)",
    ],
  });

  // Browse the entire list
  if (choice.includes("Browse")) {
    return browseEntireList();
  }

  // Search for a module
  if (choice.includes("Search")) {
    return searchModule();
  }

  // Apply filters (Type/Category)
  return filteredSearch();
};

module.exports = browseModules;
