<template>
  <div id="containerr">
    <div class="storage-available">
      <h4>Storage Available</h4>
      <div id="storage">
        <Doughnut class="pie" :data="data" :options="options"/>
      </div>
    </div>
    <div class="storage-available2">
      <h4>Primary Storage</h4>
      <div id="storagee" v-if="!showForm">
        <Doughnut class="pie" :data="data" :options="options"/>
        <Doughnut class="pie" :data="data" :options="options"/>
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
import {data, options} from './chartConfig.js'
import Storageform from './Storageform.vue'// Add this line

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'TopSection',
  components: {
    Doughnut,
    Storageform
  },
  data() {
    return {
      data,
      options,
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
  height: 10em;
}

#storagee {
  display: flex;
  height: 10em;
  gap: 10px;
}

.btn {
  background-color: #1a4d57;
  color: white;
  padding: 5px 5px; 
  font-size: 1em; /* Increase the font size */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
/* .pie{
  height: 200px;
  width: 200px;
} */
.btn:hover {
  background-color: #2f6b77; /* Darker shade on hover */
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