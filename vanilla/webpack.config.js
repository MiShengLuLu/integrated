const { webpack } = require('webpack')
const singleSpaDefaults = require('webpack-config-single-spa')
const webpackMerge = require('webpack-merge')

module.exports = () => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'integrated',
    projectName: 'vanilla'
  })

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      port: 9001
    }
  })
}