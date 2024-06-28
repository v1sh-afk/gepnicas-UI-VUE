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
    <div class="storage-available">
      <h6>Storage Available</h6>
      <div id="storage">
        <Doughnut class="pie" :data="data" />
      </div>
    </div>
    
    <div class="scheduled-jobs">
      <h6>Scheduled Jobs</h6>
      <div class="job">
        <a href="#">Archival of TN Tender Docs</a>
        <button class="details">Details</button>
        <button class="reschedule">Reschedule</button>
        <button class="abort">Abort</button>
      </div>
      <div class="job">
        <a href="#">Archival of DNH Tender Docs</a>
        <button class="details">Details</button>
        <button class="reschedule">Reschedule</button>
        <button class="abort">Abort</button>
      </div>
    </div>
  </div> 
</template>


<style scoped>

h6 {
  margin-top: 0.375em; 
  margin-bottom: 0.375em;
  margin-left: 0.1875em; 
}
.storage-available {
  border: 0.125em solid black;
  border-radius: 0.9375em; 
  margin-left: 3em;
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  align-items: center; 
}
.scheduled-jobs {
  border: 0.125em solid black; 
  border-radius: 0.9375em; 
  margin-left: 5em; 
  margin-right: 5em;
  padding: 0.625em; 
}
#containerr {
  display: flex;
  flex-wrap: wrap;
}
#storage {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 12.5em; 
  width: 25em; 
  margin-bottom: 0.625em; 
}
.job {
  display: flex;
  align-items: center;
  margin-bottom: 0.625em; 
}
.job a {
  color: blue;
  text-decoration: none;
  flex-grow: 1;
  margin-right: 10em;
}
.details,
.reschedule,
.abort {
  font-weight: bold;
  background-color: lightgray;
  border: none;
  border-radius: 0.3125em; 
  padding: 0.3125em 0.625em; 
  width: 7em;
  text-align: center;
  box-sizing: border-box;
  margin-right: 3em;
}
.abort {
  background-color: red;
  color: white;
}


@media (max-width: 37.5em) { 
  .storage-available,
  .scheduled-jobs {
    margin-left: 0.625em;
    margin-right: 0.625em; 
  }
  .details,
  .reschedule,
  .abort {
    width: auto;
    flex: 1; 
  }
}
</style>
