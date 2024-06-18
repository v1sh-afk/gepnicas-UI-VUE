<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Doughnut
  },
  data() {
    return chartConfig
  },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => ({ responsive: true, maintainAspectRatio: false })
    }
  }
}
</script>

<template>

<div id="containerr">
    <div id="st">
        <h3>Storage Available</h3>
        <div id="storage">
            <Doughnut class="pie" :data="data" />
        </div>
    </div>
    <div id="st1">
        <h3>Scheduled Jobs</h3>
    </div>
</div>


</template>

<style>
#st{
border: 2px solid black;
border-radius: 15px;
}
#st1{
border: 2px solid black;
border-radius: 15px;
}
#containerr{
    display: flex;
}
#storage{
  height: 100px;
  width: 100px;
}
</style>