<template>
  <div id="containerr">
    <div class="storage-available">
      <h4> Archival Storage</h4>
      <div id="storage">
        <Doughnut class="pie" :data="storageAvailableData" :options="options"/>
      </div>
    </div>
    <div class="storage-available2">
      <h4>Primary Storage</h4>
      <div id="storagee" v-if="!showForm">
        <div class="charts">
          <div class="pie-chart">
            <h5>HCI Storage</h5>
            <Doughnut class="pie" :data="primaryStorageDataHCI" :options="options" />
          </div>
          <div class="pie-chart">
            <h5>Hitachi Storage</h5>
            <Doughnut class="pie" :data="primaryStorageDataHitachi" :options="options" />
          </div>
          </div>
        <button v-if="!showForm" @click="openForm" class="btn">Open Storage Form</button>
      </div>
      <Storageform v-if="showForm" @back="closeForm" @storage-updated="handleStorageUpdated"/>
    </div>
  </div>
</template>


<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'vue-chartjs';
import Storageform from './Storageform.vue';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: 'TopSection',
  components: {
    Doughnut,
    Storageform
  },
  data() {
    return {
      storageAvailableData: {
        labels: ['Free', 'Used'],
        datasets: [
          {
            backgroundColor: ['#072E2D', '#42997C'],
            data: [50, 20]  // Placeholder, will be updated dynamically
          }
        ]
      },
      primaryStorageDataHCI: {
        labels: ['Free', 'Used'],
        datasets: [
          {
            backgroundColor: ['#072E2D', '#42997C'],
            data: [30, 40]  // Placeholder, will be updated dynamically
          }
        ]
      },
      primaryStorageDataHitachi: {
        labels: ['Free', 'Used'],
        datasets: [
          {
            backgroundColor: ['#072E2D', '#42997C'],
            data: [50, 30]  // Placeholder, will be updated dynamically
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              font: {
                size: 9,
              },
            },
            position: 'right',
          }
        }
      },
      showForm: false
    }
  },
  methods: {
    openForm() {
      this.showForm = true;
    },
    closeForm() {
      this.showForm = false;
    },
    handleStorageUpdated() {
      this.closeForm();
      this.fetchStorageData();
    },
    fetchStorageData() {
      axios.get('http://192.168.0.108:5000/postSystemInfo')
        .then(response => {
          const storageOptions = response.data;
          const hciData = storageOptions["1"];
          const hitachiData = storageOptions["2"];

          this.primaryStorageDataHCI = {
            ...this.primaryStorageDataHCI,
            datasets: [
              {
                ...this.primaryStorageDataHCI.datasets[0],
                data: [
                  hciData.storage_capacity - hciData.storage_used,
                  hciData.storage_used
                ]
              }
            ]
          };

          this.primaryStorageDataHitachi = {
            ...this.primaryStorageDataHitachi,
            datasets: [
              {
                ...this.primaryStorageDataHitachi.datasets[0],
                data: [
                  hitachiData.storage_capacity - hitachiData.storage_used,
                  hitachiData.storage_used
                ]
              }
            ]
          };
        })
        .catch(error => {
          console.error('Error fetching storage data:', error);
          alert('Error fetching storage data: ' + error.message);
        });
    }
  },
  mounted() {
    this.fetchStorageData();
  }
};
</script>

<style scoped>
h4 {
  margin-top: -0.2em; /* Adjust margin-top */
  margin-bottom: -0.2em; /* Adjust margin-bottom */
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
  height: 8em;
}
.storage-available2 {
  border: 0.125em solid black;
  border-radius: 0.9375em; 
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  position: relative;
  height: 8em;
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
  margin-top: -1em;
}
#storagee {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
  margin-top: -1em;
}
.charts {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.pie {
  width: 150px !important;
  height: 150px !important;
}
.btn {
  position: relative;
  background-color: #1a4d57;
  color: white;
  padding: 0.5em 1em;
  font-size: 0.875em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute;
  bottom: 30px;
  margin-left: 45em;
  white-space: nowrap;
}
.btn:hover {
  background-color: #2f6b77;
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

.pie-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pie-chart h5 {
  margin-bottom: -40px; /* Remove bottom margin */
  margin-right: 4em;
  padding-bottom: 0.2em; /* Add padding if needed */
}

</style>
