const { prompt } = require("inquirer");

// Handlers
const filteredSearch = require("./handlers/filter");
const searchModule = require("./handlers/search");

const browseModules = async () => {
  const { choice } = await prompt({
    type: "list",
    name: "choice",
    message: "Choose from below",
    choices: [
      "Search for a module",
      "Apply filters (Type/Category)",
    ],
  });

  // Search for a module
  if (choice.includes("Search")) {
    return searchModule();
  }

  // Apply filters (Type/Category)
  return filteredSearch();
};

module.exports = browseModules;
