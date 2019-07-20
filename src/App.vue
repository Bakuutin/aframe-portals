<template>
  <div id="app">
    <a-scene fog="color:black">
      <UserCamera/>
      <router-view/>

      <a-sky color="black"></a-sky>

      <!-- <a-entity position="-1 1 0" light="type: directional; color: white; intensity: 1"></a-entity> -->
      <a-entity light="type: ambient; color: #999"></a-entity>
    </a-scene>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  position: absolute;
  height: 100%;
  width: 100%;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserCamera from '@/components/Camera.vue';

@Component({
  components: {
    UserCamera,
  },
})
export default class App extends Vue {}
</script>
