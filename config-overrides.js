const { injectBabelPlugin } = require('react-app-rewired');

const rootImportConfig = [
  "root-import",
  {
    rootPathPrefix: "~",
    rootPathSuffic: "src"
  }
];

module.exports = config =>injectBabelPlugin(rootImportConfig, config);