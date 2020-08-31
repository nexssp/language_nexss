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
languageConfig.errors = require("./nexss.nexss.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
