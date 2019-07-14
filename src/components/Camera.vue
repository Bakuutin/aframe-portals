<template>
  <a-entity id="rig" position="0 0 0" look-controls wasd-controls>
    <a-entity id="camera" position="0 1.6 0" camera>
      <a-entity
        cursor="fuse: true; fuseTimeout: 200"
        position="0 0 -1"
        geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
        visible="false"
      >
      </a-entity>
    </a-entity>
  </a-entity>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UserCamera extends Vue {}
</script>
