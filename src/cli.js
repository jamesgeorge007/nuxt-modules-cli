const program = require("commander");

const { version } = require("../package");
const browseModules = require("./modules");

// register version flag
program.version(version);

// parse args
program.parse(process.argv);

// handler
browseModules();
