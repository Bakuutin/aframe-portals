<template>
  <a-box
    geometry="width: 1; height: 1"
    v-bind:portal="`location: ${targetLocation}; path: ${targetPath}`"
    v-bind:text="`value: ${text};zOffset: 0.501;align: center; wrapCount: 15`"
  ></a-box>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BoxPortal extends Vue {
  @Prop({default: null}) readonly targetLocation!: String

  @Prop({default: ''}) readonly targetPath!: String

  @Prop(String) readonly text!: String
}
</script>
