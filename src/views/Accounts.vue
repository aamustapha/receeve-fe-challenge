<template>
  <div>

    <div class="card">
      <table class="table table--striped">
        <thead>
        <th>Name</th>
        <th>Phone number</th>
        <th>Email</th>
        <th>Address</th>
        <th>Action</th>
        </thead>
        <tbody>
        <account-component :id="account.id" :debtor="account.debtor" v-for="account in accounts" :key="account.id"/>
        <tr v-if="accounts.length === 0">
          <td colspan="5" class="text-center">
            No results found
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <ul class="flex gap-2 mt-4">
      <li @click="next(p)" v-for="p in pageCount" :key="p" :class="['button button-rounded px-3 py-1 bg-white', {'bg-primary text-white': p === page}]">
        {{ p }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import axios from "axios";
import {Account} from "@/models";
import AccountComponent from "@/components/Account.vue";
import {RawLocation} from "vue-router";

@Component({
  components: {AccountComponent}
})
export default class Accounts extends Vue {
  accounts: Array<Account> = []
  pageCount: number = 0

  get page() {
    return this.$route.query?.page || 1
  }

  get search() {
    return this.$route.query.search || ""
  }

  next(page = this.page + 1) {
    this.$router.replace({
      name: this.$route.name,
      params: this.$route.params,
      query: {page}
    } as RawLocation)
    this.fetchAccounts()
  }

  created() {
    this.fetchAccounts()
  }

  @Watch('search')
  onSearchUpdated() {
    console.log(this.search)
    this.fetchAccounts()
  }

  fetchAccounts () {
    axios.get(`http://localhost:9001/accounts?_page=${this.page}&q=${this.search}`).then(response => {
      this.accounts = response.data as Array<Account>
      this.pageCount = Math.ceil(+response.headers['x-total-count'] / 10)
    })
  }
}
</script>


<style scoped>

</style>