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
      text="Down" color="blue" scale="2 2 2" position="-3 12 -3"
      rotation="0 45 0" target-location="0 0 0">
    </BoxPortal>

      <a-text
        position="0 6 -8" side="double" align="right"
        color="white" scale="4 4 4" v-bind:value="text">
      </a-text>


    <a-plane
      v-bind:height="roomScale" v-bind:width="roomScale" rotation="-90 0 0"
      side="double"
      color="#D1E3DD"
    ></a-plane>
    <a-plane
      color="#D1E3DD"
      v-bind:height="roomScale" v-bind:width="roomScale"
      v-bind:position="`0 ${roomHeight} 0`" rotation="-90 0 0" side="double"></a-plane>

    <a-cylinder
      color="#5762D5" v-bind:height="roomHeight" radius="0.1"
      v-bind:position="`${roomScale/2} ${roomHeight/2} ${roomScale/2}`"
    ></a-cylinder>
    <a-cylinder
      color="#5762D5" v-bind:height="roomHeight" radius="0.1"
      v-bind:position="`${roomScale/2} ${roomHeight/2} ${-roomScale/2}`"
    ></a-cylinder>
    <a-cylinder
      color="#5762D5" v-bind:height="roomHeight" radius="0.1"
      v-bind:position="`${-roomScale/2} ${roomHeight/2} ${roomScale/2}`"
    ></a-cylinder>
    <a-cylinder
      color="#5762D5" v-bind:height="roomHeight" radius="0.1"
      v-bind:position="`${-roomScale/2} ${roomHeight/2} ${-roomScale/2}`"
    ></a-cylinder>


    <BoxPortal
      text="A" color="#404E5C"
      material="roughness:1"
      v-bind:width="roomScale" v-bind:height="roomHeight" v-bind:depth="roomScale"
      v-bind:position="`0 ${roomHeight/2} ${roomScale}`"
      rotation="0 180 0" target-location="0 10 0">
    </BoxPortal>
    <BoxPortal
      text="B" color="#404E5C"
      material="roughness:1"
      v-bind:width="roomScale" v-bind:height="roomHeight" v-bind:depth="roomScale"
      v-bind:position="`0 ${roomHeight/2} ${-roomScale}`"
      rotation="0 0 0" target-location="0 10 0">
    </BoxPortal>
    <BoxPortal
      text="C" color="#404E5C"
      material="roughness:1"
      v-bind:width="roomScale" v-bind:height="roomHeight" v-bind:depth="roomScale"
      v-bind:position="`${roomScale} ${roomHeight/2} 0`"
      rotation="0 -90 0" target-location="0 10 0">
    </BoxPortal>
    <BoxPortal
      text="D" color="#404E5C"
      material="roughness:1"
      v-bind:width="roomScale" v-bind:height="roomHeight" v-bind:depth="roomScale"
      v-bind:position="`${-roomScale} ${roomHeight/2} 0`"
      rotation="0 90 0" target-location="0 10 0">
    </BoxPortal>
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
  roomScale: Number = 1.5;
  roomHeight: Number = 2.5;

  get text() {
    if (this.$store.state.camera !== undefined) {
      return ['x', 'y', 'z'].map(
        key => this.$store.state.camera[key] || 0
      ).map(
        n => n.toFixed(2)
      ).join('\n')
    };

    return '';
  }
}
</script>
