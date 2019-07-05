module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,

  pluginOptions: {
    quasar: {
      treeShake: true
    }
  },

  transpileDependencies: [
    /[\\/]node_modules[\\/]quasar[\\/]/
  ]
}
