const { defineConfig } = require("@vue/cli-service");

const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

// @vue/cli 4.5.17 版本的配置方法
// module.exports = {
//   configureWebpack: {
//     plugins: [
//       AutoImport({
//         resolvers: [ElementPlusResolver()],
//       }),
//       Components({
//         resolvers: [ElementPlusResolver()],
//       }),
//     ],
//   },
// };

// vuecli 5.x 版本才有 defineConfig

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
