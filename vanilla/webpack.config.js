const singleSpaDefaults = require('webpack-config-single-spa')
const { merge } = require('webpack-merge')

module.exports = () => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'integrated',
    projectName: 'vanilla'
  })

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      port: 9001
    }
  })
}