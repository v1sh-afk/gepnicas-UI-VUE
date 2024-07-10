<template>
    <div class="infra-inventory">
      <h2>Infra Inventory</h2>
      <form @submit.prevent="saveConfig" class="inventory-form">
        <fieldset>
          <legend>Portal Information:</legend>
          <div class="form-group">
            <label>Portal Name:</label>
            <input v-model="config.portal_name" />
          </div>
          <div class="form-group">
            <label>URL:</label>
            <input v-model="config.url" />
          </div>
          <div class="form-group">
            <label>XML User ID:</label>
            <input v-model="config.xml_user_id" />
          </div>
          <div class="form-group">
            <label>MSR Serial Number:</label>
            <input v-model="config.msr_slno" type="number" />
          </div>
          <div class="form-group">
            <label>NESD Code:</label>
            <input v-model="config.nesd_code" type="number" />
          </div>
          <div class="form-group">
            <label>Running From:</label>
            <input v-model="config.running_from" />
          </div>
          <div class="form-group">
            <label>Storage Box:</label>
            <input v-model="config.storage_box" />
          </div>
        </fieldset>
  
        <fieldset>
          <legend>Primary Web Nodes:</legend>
          <div class="form-group">
            <label>Node 1 IP:</label>
            <input v-model="config.primary_web_node1" />
          </div>
          <div class="form-group">
            <label>Node 2 IP:</label>
            <input v-model="config.primary_web_node2" />
          </div>
          <div class="form-group">
            <label>Web Script 1:</label>
            <input v-model="config.primary_web_script1" />
          </div>
          <div class="form-group">
            <label>Web Script 2:</label>
            <input v-model="config.primary_web_script2" />
          </div>
          <div class="form-group">
            <label>Worker File:</label>
            <input v-model="config.primary_worker_file" />
          </div>
          <div class="form-group">
            <label>Blue Worker:</label>
            <input v-model="config.primary_blue_worker" />
          </div>
          <div class="form-group">
            <label>Apache Config Path:</label>
            <input v-model="config.primary_apache_conf" />
          </div>
          <div class="form-group">
            <label>Apache SSL Path:</label>
            <input v-model="config.primary_apache_ssl" />
          </div>
        </fieldset>
  
        <fieldset>
          <legend>Primary App Nodes:</legend>
          <div class="form-group">
            <label>Node 1 IP:</label>
            <input v-model="config.primary_app_node1" />
          </div>
          <div class="form-group">
            <label>Node 2 IP:</label>
            <input v-model="config.primary_app_node2" />
          </div>
          <div class="form-group">
            <label>App Script 1:</label>
            <input v-model="config.primary_app_script1" />
          </div>
          <div class="form-group">
            <label>App Script 2:</label>
            <input v-model="config.primary_app_script2" />
          </div>
          <div class="form-group">
            <label>App User:</label>
            <input v-model="config.primary_app_user" />
          </div>
          <div class="form-group">
            <label>Replication User:</label>
            <input v-model="config.primary_rep_user" />
          </div>
          <div class="form-group">
            <label>Replication Script 1:</label>
            <input v-model="config.primary_rep_script1" />
          </div>
        </fieldset>
  
        <fieldset>
          <legend>DR Web Nodes:</legend>
          <div class="form-group">
            <label>Node 1 IP:</label>
            <input v-model="config.dr_web_node1" />
          </div>
          <div class="form-group">
            <label>Node 2 IP:</label>
            <input v-model="config.dr_web_node2" />
          </div>
        </fieldset>
  
        <fieldset>
          <legend>DR App Nodes:</legend>
          <div class="form-group">
            <label>Node 1 IP:</label>
            <input v-model="config.dr_app_node1" />
          </div>
          <div class="form-group">
            <label>Node 2 IP:</label>
            <input v-model="config.dr_app_node2" />
          </div>
          <div class="form-group">
            <label>Catalina App Path:</label>
            <input v-model="config.dr_catalina_app" />
          </div>
          <div class="form-group">
            <label>Catalina Rep Path:</label>
            <input v-model="config.dr_catalina_rep" />
          </div>
          <div class="form-group">
            <label>App Script 1:</label>
            <input v-model="config.dr_app_script1" />
          </div>
          <div class="form-group">
            <label>Replication Script 1:</label>
            <input v-model="config.dr_rep_script1" />
          </div>
        </fieldset>
  
        <fieldset>
          <legend>DR DB Node:</legend>
          <div class="form-group">
            <label>DB Node IP:</label>
            <input v-model="config.dr_db_node" />
          </div>
          <div class="form-group">
            <label>DBA User:</label>
            <input v-model="config.dr_dba_user" />
          </div>
        </fieldset>
  
        <fieldset>
          <legend>Backup Information:</legend>
          <div class="form-group">
            <label>Backup Node IP:</label>
            <input v-model="config.backup_node" />
          </div>
          <div class="form-group">
            <label>Backup Path:</label>
            <input v-model="config.backup_path" />
          </div>
        </fieldset>
  
        <div class="form-actions">
          <button type="submit" class="btn-save">Save</button>
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
        config: {
          portal_name: '',
          url: '',
          xml_user_id: '',
          msr_slno: 0,
          nesd_code: 0,
          running_from: '',
          storage_box: '',
          primary_web_node1: '',
          primary_web_node2: '',
          primary_web_script1: '',
          primary_web_script2: '',
          primary_worker_file: '',
          primary_blue_worker: '',
          primary_apache_conf: '',
          primary_apache_ssl: '',
          primary_app_node1: '',
          primary_app_node2: '',
          primary_app_script1: '',
          primary_app_script2: '',
          primary_app_user: '',
          primary_rep_user: '',
          primary_rep_script1: '',
          dr_web_node1: '',
          dr_web_node2: '',
          dr_app_node1: '',
          dr_app_node2: '',
          dr_catalina_app: '',
          dr_catalina_rep: '',
          dr_app_script1: '',
          dr_rep_script1: '',
          dr_db_node: '',
          dr_dba_user: '',
          backup_node: '',
          backup_path: '',
        }
      };
    },
    methods: {
      fetchConfig() {
        axios.get('http://192.168.0.113:5000/getInfraMaster')
          .then(response => {
            this.config = response.data;
          })
          .catch(error => {
            console.error('Error fetching config:', error);
            alert('Error fetching config: ' + error.message);
          });
      },
      saveConfig() {
        axios.post('http://192.168.0.113:5000/postInfraMaster', this.config)
          .then(response => {
            alert(response.data.message);
          })
          .catch(error => {
            console.error('Error saving config:', error);
            alert('Error saving config: ' + error.message);
          });
      }
    },
    mounted() {
      this.fetchConfig();
    }
  };
  </script>
  
  <style scoped>
  .infra-inventory {
    max-width: 600px;
    margin: 20px auto;
    padding: 30px;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  }
  
  .infra-inventory h2 {
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
    color: #495057;
  }
  
  .inventory-form {
    display: flex;
    flex-direction: column;
  }
  
  .fieldset {
    margin-bottom: 20px;
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
  
  .form-group input {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ced4da;
    border-radius: 5px;
    transition: border-color 0.2s;
  }
  
  .form-group input:focus {
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
    background-color: #1a4d57;
    color: white;
  }
  
  .btn-save:hover {
    background-color: #33899a;
  }
  
  .btn-back {
    background-color: #6c757d;
    color: white;
  }
  
  .btn-back:hover {
    background-color: #5a6268;
  }
  </style>    