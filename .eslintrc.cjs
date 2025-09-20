const { configure, presets } = require('eslint-kit')

module.exports = configure({
  presets: [
    presets.typescript(),
    presets.imports(),
    presets.node(),
    presets.prettier(),
  ],
})
