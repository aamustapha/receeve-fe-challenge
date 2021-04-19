<template>
  <tr>
    <td>
      {{ debtor.title }} {{ debtor.firstName }} {{ debtor.lastName }}
    </td>
    <td>
      <a :href="`tel:${debtor.mobilePhone}`" class="hover:underline">{{ debtor.mobilePhone }}</a>
    </td>
    <td>
      <a :href="`mailto:${debtor.email}`" class="hover:underline">{{ debtor.email }}</a>
    </td>
    <td>
      {{ debtor.address.address }}
    </td>
    <td>
      <router-link class="button button-dark bg-primary" :to="`/accounts/${id}`">View account</router-link>
    </td>
  </tr>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";
import {Person} from "@/models";

@Component
export default class Account extends Vue {
  @Prop()
  id: string;

  @Prop()
  debtor: Person
}
</script>

<style scoped>

</style>