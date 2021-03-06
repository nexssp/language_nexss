let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Nexss";
languageConfig.description =
  "Nexss is an innovative and evolutionary tool for the programmers.";
languageConfig.url = "https://nexss.com";
languageConfig.founders = ["Marcin Polak"];
languageConfig.developers = ["Nexss.com"];
languageConfig.years = ["2018"];
languageConfig.extensions = [".nexss"];
languageConfig.executeCommandLine = "";
languageConfig.printCommandLine = ""; //no console.log() needed to display result eg node -p "4+6"
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "";
languageConfig.builders = {};
languageConfig.compilers = {
  nexss: {
    install: "installed.",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "nexss",
    args: "<file> --nexssScript",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.nexss.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
