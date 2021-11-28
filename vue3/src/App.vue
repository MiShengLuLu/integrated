<template>
  <div>
    <parcel :config="config" :mountParcel="mountParcel" />
    <router-link to="/foo">foo</router-link>
    <router-link to="/bar">bar</router-link>
    <button @click="handleClick">按钮</button>
  </div>
  <router-view></router-view>
</template>

<script>
import Parcel from 'single-spa-vue/dist/esm/parcel'
import { mountRootParcel } from 'single-spa'

export default {
  name: 'App',
  components: {
    Parcel
  },
  data () {
    return {
      config: window.System.import('@integrated/navbar'),
      mountParcel: mountRootParcel
    }
  },
  methods: {
    async handleClick () {
      const { publicApiFunction } = await window.System.import('@integrated/helper')
      publicApiFunction('@integrated/vue3')
    }
  },
  async mounted () {
    const { sharedSubject } = await window.System.import('@integrated/helper')
    sharedSubject.subscribe(console.log)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
