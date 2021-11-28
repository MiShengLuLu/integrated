import { registerApplication, start } from "single-spa";
import { constructApplications, constructRoutes } from 'single-spa-layout'

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication(
//   "@single-spa/welcome",
//   () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   location => location.pathname === '/'
// );

// registerApplication({
//   name: "@integrated/vanilla",
//   app: () => System.import("@integrated/vanilla"),
//   activeWhen: ["/vanilla"]
// });

// registerApplication({
//   name: "@integrated/react",
//   app: () => System.import("@integrated/react"),
//   activeWhen: ["/react"]
// });

// registerApplication({
//   name: "@integrated/vue3",
//   app: () => System.import("@integrated/vue3"),
//   activeWhen: ["/vue"]
// });

// 获取路由配置对象
const routes = constructRoutes(document.getElementById('single-spa-layout'))
// 获取路由信息数组
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name)
  }
})

// 遍历路由信息注册应用
applications.forEach(registerApplication)

start({
  urlRerouteOnly: true,
});
