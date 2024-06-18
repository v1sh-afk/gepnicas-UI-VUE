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
    <div class="st">
        <h4>Storage Available</h4>
        <div id="storage">
            <Doughnut class="pie" :data="data" />
        </div>
    </div>
    <div class="stt">
        <h4>Scheduled Jobs</h4>
        
    </div>
</div>


</template>

<style>
h4{
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 3px;
}
.st{
border: 2px solid black;
border-radius: 15px;
margin-left: 50px;
margin-right: 10px;
}
.stt{
  border: 2px solid black;
  border-radius: 15px;
}
#containerr{
    display: flex;
}
#storage{
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
}
</style>