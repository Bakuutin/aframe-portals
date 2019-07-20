<template>
  <a-box
    v-bind:portal="`location: ${targetLocation}; path: ${targetPath}`"
    v-bind:text="`value: ${text};zOffset: ${depth/2 + 0.001};align: center; wrapCount: 15`"
    v-bind:geometry="`width: ${width}; height: ${height}; depth: ${depth}`"
  ></a-box>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BoxPortal extends Vue {
  @Prop({default: null}) readonly targetLocation!: String

  @Prop({default: ''}) readonly targetPath!: String

  @Prop({default: 1}) readonly width!: Number
  @Prop({default: 1}) readonly height!: Number
  @Prop({default: 1}) readonly depth!: Number

  @Prop(String) readonly text!: String
}
</script>
