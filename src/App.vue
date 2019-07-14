<template>
  <div id="app">
    <a-scene>
      <UserCamera/>
      <router-view/>
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
