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
      <h4>Storage Available</h4>
      <div id="storage">
        <Doughnut class="pie" :data="data" />
      </div>
    </div>
    <div class="scheduled-jobs">
      <h4>Scheduled Jobs</h4>
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
h4 {
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 3px;
}
.storage-available {
  border: 2px solid black;
  border-radius: 15px;
  margin-left: 3em;
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align items horizontally */
}
.scheduled-jobs {
  border: 2px solid black;
  border-radius: 15px;
  margin-left: 5em; /* Increased margin to create more gap */
  margin-right: 5em;
  padding: 10px;
}
#containerr {
  display: flex;
  flex-wrap: wrap;
}
#storage {
  display: flex;
  justify-content: center; /* Center align content horizontally */
  align-items: center; /* Center align content vertically */
  height: 200px; /* Increased height */
  width: 400px; /* Increased width */
  margin-bottom: 10px;
}
.job {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
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
  border-radius: 5px;
  padding: 5px 10px;
  width: 100px; /* Fixed width */
  text-align: center;
  box-sizing: border-box;
  margin-right: 3em;
}
.abort {
  background-color: red;
  color: white;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .storage-available,
  .scheduled-jobs {
    margin-left: 10px;
    margin-right: 10px;
  }
  .details,
  .reschedule,
  .abort {
    width: auto;
    flex: 1; /* Allow buttons to grow and shrink as needed */
  }
}
</style>
