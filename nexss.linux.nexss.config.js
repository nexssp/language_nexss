let languageConfig = Object.assign({}, require(`../config.linux`));
languageConfig.title = "Nexss";
languageConfig.description =
  "Nexss is an innovative and evolutionary tool for the programmers.";
languageConfig.url = "https://nexss.com";
languageConfig.extensions = [".nexss"];
languageConfig.executeCommandLine = "";
languageConfig.printCommandLine = ""; //no console.log() needed to display result eg node -p "4+6"
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "";
languageConfig.builders = {};
languageConfig.compilers = {
  nexss: {
    install: "installed.",
    command: "nexss",
    args: "<file> --nexssScript",
    help: ``,
  },
};

// Nexss is installed automatically with Nexss Programmer
const dist = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`).dist;
const distName = dist();
languageConfig.dist = distName;

languageConfig.errors = require("./nexss.nexss.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
