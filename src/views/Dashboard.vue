<template>
  <div>
    {{  claimsByDueMonth  }}
  </div>
</template>
<script lang="ts">
import {Component, Vue } from "vue-property-decorator";
import {Claim} from "@/models";
import axios from "axios";

@Component
export default class Dashboard extends Vue {
  claims: Array<Claim> = []

  get claimsByCompletion () {
    return this.claims.reduce((accumulator, current) => {
      if (!accumulator[current.status]) {
        accumulator[current.status] = 0
      }
      accumulator[current.status] += current.baseAmount
      return accumulator
    }, {})
  }

  get claimsByDueDate() {
    return this.claims.reduce((accumulator, current) => {
      if (!accumulator[current.dueDate]) {
        accumulator[current.dueDate] = 0
      }
      accumulator[current.dueDate] += current.baseAmount
      return accumulator
    }, {})
  }

  get claimsByDueMonth() {
    return this.claims.reduce((accumulator, current) => {
      const dueMonth = current.dueDate.substr(0,7)
      if (!accumulator[dueMonth]) {
        accumulator[dueMonth] = 0
      }
      accumulator[dueMonth] += current.baseAmount
      return accumulator
    }, {})
  }

  created () {
    axios.get(`http://localhost:9001/claims?_sort=dueDate`).then(response => {
      this.claims = response.data as Array<Claim>
    })
  }
}
</script>


<style scoped>

</style>