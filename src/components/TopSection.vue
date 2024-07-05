<template>
  <div id="containerr">
    <div class="storage-available">
      <h4>Storage Available</h4>
      <div id="storage">
        <Doughnut class="pie" :data="data" />
      </div>
    </div>
    <div class="storage-available2">
      <h4>Primary Storage</h4>
      <div id="storage" v-if="!showForm">
        <Doughnut class="pie" :data="data" />
        <Doughnut class="pie" :data="data" />
      </div>
      <button v-if="!showForm" @click="openForm" class="btn">Open Storage Form</button>
      <!-- <Storageform />  -->
      <Storageform v-if="showForm" @back="closeForm"/>
    </div>
  </div>
</template>
<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'
import Storageform from './Storageform.vue' // Add this line

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'TopSection',
  components: {
    Doughnut,
    Storageform
  },
  data() {
    return {
      ...chartConfig,
      showForm: false // Add this data property
    }
  },
  methods: {
    openForm() {
      this.showForm = true;
    },
    closeForm() {
      this.showForm = false;
    }
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
<style scoped>

h4 {
  margin-top: 0.375em; 
  margin-bottom: 0.375em;
  margin-left: 0.1875em; 
}
.storage-available {
  border: 0.125em solid black;
  border-radius: 0.9375em; 
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 37%;
  margin-right: 3%;
}
.storage-available2 {
  border: 0.125em solid black;
  border-radius: 0.9375em; 
  width: 60%;
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
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
}
#storage {
  display: flex;
  height: 12.5em;
}

.btn {
  background-color: #ef621b; /* Orange color */
  color: white;
  padding: 10px 20px; /* Increase the padding to make the button bigger */
  font-size: 1.2em; /* Increase the font size */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #BE5825; /* Darker shade on hover */
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