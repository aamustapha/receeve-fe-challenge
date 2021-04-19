<template>
  <div>
    accounts
  </div>
</template>
<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";

@Component
export default class Accounts extends Vue {
  @Prop()
  msg!: string;
}
</script>


<style scoped>

</style>