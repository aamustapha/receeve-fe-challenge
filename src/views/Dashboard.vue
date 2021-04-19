<template>
  <div class="grid grid-cols-3 gap-2">
    <div class="card">
      <p class="px-4 py-2 font-semibold">Summary</p>
      <table class="table table--striped">
        <tbody>
        <tr>
          <td>Total No. of Claims</td>
          <td>{{ claims.length }}</td>
        </tr>
        <tr>
          <td>Average claim amount</td>
          <td>{{moneyFormat(averageAmount) }}</td>
        </tr>
        <tr>
          <td>Average fee</td>
          <td>{{moneyFormat(averageFee) }}</td>
        </tr>
        <tr>
          <td>Total open</td>
          <td>{{ moneyFormat(claimsByCompletion.OPEN) }}</td>
        </tr>
        <tr>
          <td>Total paid</td>
          <td>{{ moneyFormat(claimsByCompletion.PAID) }}</td>
        </tr>
        <tr>
          <td>Total deleted</td>
          <td>{{ moneyFormat(claimsByCompletion.DELETED) }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="card px-4 py-2">
      <PieChart :chart-data="transformSummaryForChart(claimsByCompletion, 'Collection by status completion')" :options="{}"/>
    </div>
    <div class="card px-4 py-2">
      <BarChart :chart-data="transformSummaryForChart(claimsByDueMonth, 'Collection by month')" :options="{}"/>
    </div>
    <div class="card px-4 py-2">
      <PieChart :chart-data="transformSummaryForChart(claimsFeeByCompletion, 'Collection fees by status completion')" :options="{}"/>
    </div>
    <div class="card px-4 py-2">
      <BarChart :chart-data="transformSummaryForChart(claimsFeeByDueMonth, 'Collection fees by month')" :options="{}"/>
    </div>

  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {Claim} from "@/models";
import axios from "axios";
import BarChart from "@/components/BarChart.vue";
import PieChart from "@/components/PieChart.vue";
import { moneyFormat } from "@/utils"

@Component({
  components: {PieChart, BarChart}
})
export default class Dashboard extends Vue {
  claims: Array<Claim> = []

  chartOptions: object = {
    responsive: true,
    fill: false
  }

  get claimsByCompletion() {
    return this.claims.reduce((accumulator, current) => {
      if (!accumulator[current.status]) {
        accumulator[current.status] = 0
      }
      accumulator[current.status] += current.baseAmount
      return accumulator
    }, {})
  }
  get claimsByDueMonth() {
    return this.claims.reduce((accumulator, current) => {
      const dueMonth = current.dueDate.substr(0, 7)
      if (!accumulator[dueMonth]) {
        accumulator[dueMonth] = 0
      }
      accumulator[dueMonth] += current.baseAmount
      return accumulator
    }, {})
  }

  get averageAmount () {
    return this.claims.reduce((accumulator, current) => {
      return accumulator + current.baseAmount
    }, 0) / this.claims.length
  }

  get claimsFeeByCompletion() {
    return this.claims.reduce((accumulator, current) => {
      if (!accumulator[current.status]) {
        accumulator[current.status] = 0
      }
      accumulator[current.status] += current.fees
      return accumulator
    }, {})
  }

  get claimsFeeByDueMonth() {
    return this.claims.reduce((accumulator, current) => {
      const dueMonth = current.dueDate.substr(0, 7)
      if (!accumulator[dueMonth]) {
        accumulator[dueMonth] = 0
      }
      accumulator[dueMonth] += current.fees
      return accumulator
    }, {})
  }

  get averageFee () {
    return this.claims.reduce((accumulator, current) => {
      return accumulator + current.fees
    }, 0) / this.claims.length
  }

  moneyFormat(amount, currency="EUR,") {
    return moneyFormat(amount, currency)
  }

  // get transformSummaryForChart () {
  //   return  (summary, label='Sample chart') => {
  //     return {
  //       labels: Object.keys(summary),
  //       datasets: [{
  //         label,
  //         backgroundColor: 'rgb(255, 99, 132)',
  //         borderColor: 'rgb(255, 99, 132)',
  //         data: Object.values(summary)
  //       }]
  //     }
  //   }
  transformSummaryForChart(summary, label = 'Sample chart') {
    return {
      labels: Object.keys(summary),
      datasets: [{
        label,
        backgroundColor: ["#FDE68A", "#34D399", "#FCA5A5", "#93C5FD", "#818CF8", "#F9A8D4"],
        borderColor: '#A1A9D2',
        data: Object.values(summary).map(v => v / 100)
      }]
    }
  }

  created() {
    axios.get(`http://localhost:9001/claims?_sort=dueDate`).then(response => {
      this.claims = response.data as Array<Claim>
    })
  }
}
</script>


<style scoped>

</style>