<template>
  <div class="card p-3">
    <p class="font-semibold text-lg leading-none">{{ debtor.title }} {{ debtor.firstName }} {{ debtor.lastName }}</p>
    <small>{{ debtor.address.address }}</small>

    <div class="flex gap-1">
      <a :href="`tel:${debtor.mobilePhone}`" class="button button-sm bg-primary text-white">
        <svg width="12" height="12" viewBox="0 0 20 20" class="mr-1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V4C1 12.284 7.716 19 16 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V13.721C19.0001 13.511 18.934 13.3064 18.8112 13.136C18.6885 12.9657 18.5152 12.8383 18.316 12.772L13.823 11.274C13.5947 11.1981 13.3466 11.2071 13.1244 11.2993C12.9021 11.3915 12.7205 11.5607 12.613 11.776L11.483 14.033C9.03446 12.9267 7.07332 10.9655 5.967 8.517L8.224 7.387C8.43925 7.27945 8.60851 7.0979 8.70072 6.87564C8.79293 6.65339 8.8019 6.40534 8.726 6.177L7.228 1.684C7.16171 1.48496 7.03449 1.3118 6.86436 1.18905C6.69422 1.0663 6.48979 1.00016 6.28 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Call</a>
      <a :href="`tel:${debtor.email}`" class="button button-sm bg-primary text-white">
        <svg width="12" height="12" viewBox="0 0 20 16" fill="none" class="mr-1" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4L8.89 9.26C9.21866 9.47928 9.6049 9.5963 10 9.5963C10.3951 9.5963 10.7813 9.47928 11.11 9.26L19 4M3 15H17C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Email</a>
      <a :href="`/accounts/${id}`" class="button button-sm bg-primary text-white">More info</a>

    </div>
  </div>
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