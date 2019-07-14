<template>
  <a-entity>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" portal="path:/about;location: 10 10 0"></a-sphere>
  </a-entity>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  mounted() {
    console.log('Welcome home', this);
  }
}
</script>
