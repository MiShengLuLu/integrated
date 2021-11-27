import { h, createApp } from 'vue/dist/vue.esm-bundler.js';
import singleSpaVue from 'single-spa-vue';
import { createRouter, createWebHistory  } from 'vue-router'

import App from './App.vue';

const Foo = { template: '<div>Foo</div>' }
const Bar = { template: '<div>Bar</div>' }

const routes = [
  // { path: '/', component: Foo },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  // history: VueRouter.createWebHashHistory('/vue3/'),
  history: createWebHistory('/vue3'),
  routes, // short for `routes: routes`
})

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecyle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      });
    },
  },
  handleInstance: app => {
    app.use(router)
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
