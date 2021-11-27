<template>
  <div>
    <parcel :config="config" :mountParcel="mountParcel" />
    <router-link to="/foo">foo</router-link>
    <router-link to="/bar">bar</router-link>
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
