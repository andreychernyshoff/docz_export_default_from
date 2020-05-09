exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: `@babel/plugin-proposal-export-default-from`,
  })
}
