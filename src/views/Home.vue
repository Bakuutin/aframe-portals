<template>
  <a-entity>
    <a-sphere
      animation="property: rotation; easing: linear; to: 0 360 0; from: 0 0 0; loop: true; dur: 10000"
      position="3 1.25 -5" radius="1.25" color="white"
      material="src: 2k_earth_daymap.jpg"
      portal="path:/about">
      <a-text
        position="0 1.7 0" side="double" align="center"
        color="white" scale="4 4 4" value="Info">
      </a-text>
    </a-sphere>

    <BoxPortal
      text="Up" color="red" scale="2 2 2" position="-6 1 -7"
      rotation="0 45 0" target-location="0 10 0">
    </BoxPortal>
    <BoxPortal
      text="Down" color="blue" scale="2 2 2" position="-6 12 -7"
      rotation="0 45 0" target-location="0 0 0">
    </BoxPortal>

    <a-text
        position="0 6 -8" side="double" align="right"
        color="white" scale="4 4 4" v-bind:value="text">
      </a-text>

    <a-entity environment="preset: tron"></a-entity>
  </a-entity>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BoxPortal from '@/components/BoxPortal.vue';

@Component({
  components: {
    BoxPortal,
  },
})
export default class Home extends Vue {
  get text() {
    if (this.$store.state.camera !== undefined) {
      return ['x', 'y', 'z'].map(
        key => this.$store.state.camera[key]
      ).map(
        n => n.toFixed(2)
      ).join('\n')
    };

    return '';
  }
}
</script>
