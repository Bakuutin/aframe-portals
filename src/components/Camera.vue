<template>
  <a-entity id="rig" position="0 0 0" movement-controls="speed:0.1">
    <a-entity
      id="camera" position="0 1.6 0" look-controls
      camera="fov:120;zoom:1" store-position="key: camera"
      class="portal-activator">
    </a-entity>
    <a-entity hand-controls="left" class="portal-activator">
      <a-entity light="type: point; intensity: 0.75; distance: 2; decay: 2"></a-entity>
    </a-entity>
    <!-- <a-entity hand-controls="right" class="portal-activator">
      <a-entity light="type: point; intensity: 0.75; distance: 2; decay: 2"></a-entity>
    </a-entity> -->
  </a-entity>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UserCamera extends Vue {}
</script>
