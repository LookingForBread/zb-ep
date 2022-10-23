import DefaultTheme from "vitepress/theme";
import "element-plus/dist/index.css";
import '@vueup/vue-quill/dist/vue-quill.snow.css';


export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    import("element-plus").then((module) => {
      app.use(module);
    });
    import("@element-plus/icons-vue").then((module) => {
        app.use(module);
      });
  },
};