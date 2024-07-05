<template>
  <div class="storage-form">
    <h1>STORAGE FORM</h1>
    <form @submit.prevent="updateStorage" class="form">
      <div class="form-group">
        <label for="storageType">Storage Type:</label>
        <select id="storageType" v-model="selectedStorage" @change="loadStorageData">
          <option v-for="(storage, key) in storageOptions" :key="key" :value="key">
            {{ storage.storage_name }}
          </option>
        </select>
      </div>
      
      <div class="form-group">
        <label>Storage Capacity:</label>
        <span>{{ storageData.storage_capacity }}</span>
      </div>

      <div class="form-group">
        <label for="storageUsed">Storage Used:</label>
        <input id="storageUsed" type="number" v-model="storageData.storage_used" />
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-save">Update</button>
        <button type="button" @click="$emit('back')" class="btn-back">Back</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      storageOptions: {
        "1": {
          "storage_capacity": 800,
          "storage_name": "HCI",
          "storage_used": 669
        },
        "2": {
          "storage_capacity": 1200,
          "storage_name": "HITACHI",
          "storage_used": 800
        }
      },
      selectedStorage: "1",
      storageData: {
        storage_capacity: 800,
        storage_used: 669,
      }
    };
  },
  methods: {
    fetchStorageOptions() {
      axios.get('http://192.168.0.112:5000/postSystemInfo')
        .then(response => {
          console.log('GET response:', response.data);
          this.storageOptions = response.data;
          this.selectedStorage = Object.keys(this.storageOptions)[0];
          this.loadStorageData();
        })
        .catch(error => {
          console.error('Error fetching storage options:', error);
          alert('Error fetching storage options: ' + error.message);
        });
    },
    loadStorageData() {
      if (this.selectedStorage) {
        this.storageData = this.storageOptions[this.selectedStorage];
      }
    },
    updateStorage() {
      // Clone the current storageOptions to avoid mutating the original data directly
      const updatedStorageOptions = JSON.parse(JSON.stringify(this.storageOptions));
      // Update the selected storage with the new used value
      updatedStorageOptions[this.selectedStorage].storage_used = this.storageData.storage_used;
      
      console.log('Updated storage options:', updatedStorageOptions);

      axios.post('http://192.168.0.112:5000/postSystemInfo', updatedStorageOptions)
      .then(response => {
        console.log('POST response:', response.data);
        alert('Storage updated successfully!');
      })
      .catch(error => {
        console.error('Error updating storage:', error);
        alert('Failed to update storage: ' + error.message);
      });
    }
  },
  mounted() {
    this.fetchStorageOptions();
  }
};
</script>

<style scoped>
.storage-form {
  max-width: 400px;
  margin: 10px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}


.storage-form h1 {
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
  color: #495057;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #495057;
}

.form-group select, .form-group input {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ced4da;
  border-radius: 5px;
  transition: border-color 0.2s;
}

.form-group select:focus, .form-group input:focus {
  border-color: #80bdff;
  outline: none;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn-save, .btn-back {
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-save {
  background-color: #ef621b;
  color: white;
}

.btn-save:hover {
  background-color: #BE5825;
}

.btn-back {
  background-color: #6c757d;
  color: white;
}

.btn-back:hover {
  background-color: #5a6268;
}
</style>
