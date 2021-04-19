<template>
  <div class="grid lg:grid-cols-3 gap-2">
    <div class="card">
      <h5 class="font-bold text-large py-2 px-4">Account Information</h5>
      <table class="table table--striped" v-if="person">
        <tbody>
          <tr>
            <td>Title</td>
            <td>{{ person.title }}</td>
          </tr>
          <tr>
            <td>Full name</td>
            <td>{{ person.firstName }} {{ person.lastName }}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>{{ person.address.country }}</td>
          </tr>
          <tr>
            <td>Phone number</td>
            <td>{{ person.mobilePhone }}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{ person.email }}</td>
          </tr>
          <tr>
            <td>Full address</td>
            <td>
              {{ person.address.address }}, <br/>
              {{ person.address.city }},
              {{ person.address.state }},
              {{ person.address.country }},
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card lg:col-span-2 overflow-hidden">
      <h5 class="font-bold text-large py-2 px-4">Claims</h5>
      <table class="table table--striped">
        <thead>
          <th>Amount</th>
          <th>Fees</th>
          <th>Due Date</th>
          <th>Status</th>
        </thead>
        <tbody>
        <tr v-for="claim in claims" :key="claim.id" :class="[statusClass(claim.status), 'border-l-4 border-r-4']">
          <td>{{ moneyFormat(claim.baseAmount, claim.currency) }}</td>
          <td>{{ moneyFormat(claim.fees, claim.currency) }}</td>
          <td>{{ claim.dueDate }}</td>
          <td>{{ claim.status }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {Account, Claim} from "@/models";
import axios from "axios";

@Component
export default class AccountInfo extends Vue {
  account: Account = null
  claims: Array<Claim> = []

  get id (): string {
    return this.$route.params.id;
  }

  get person() {
    return this.account?.debtor
  }

  get statusClass () {
    return status => {
      switch (status) {
        case "OPEN":
          return "border-yellow-300"
        case "PAID":
          return "border-green-600"
        case "DELETED":
          return "border-red-500"
        default:
          return ""
      }
    }
  }

  moneyFormat (amount, currency): string {
    return `${currency} ${(amount/100).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
  }

  created () {
    axios.get(`http://localhost:9001/accounts/${this.id}`).then(response => response.data).then(account => {
      this.account = account as Account
    })

    axios.get(`http://localhost:9001/claims/?accountId=${this.id}`).then(response => response.data).then(claims => {
      this.claims = claims as Array<Claim>
    })
  }
}
</script>

<style scoped>

</style>