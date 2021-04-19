<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
    <account-component :id="account.id" :debtor="account.debtor" v-for="account in accounts" :key="account.id"/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import axios from "axios";
import {Account} from "@/models";
import AccountComponent from "@/components/Account.vue";
@Component({
  components: {AccountComponent}
})
export default class Accounts extends Vue {
  accounts: Array<Account> = []

  created () {
    axios.get("http://localhost:9001/accounts").then(response => response.data).then(accounts => {
      this.accounts = accounts as Array<Account>
    })
  }
}
</script>


<style scoped>

</style>