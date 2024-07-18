<template>
  <div class="buttonclass">
    <button class="edit" @click="addInstance">Add New Instance</button>
  </div>
  <div class="container">
    <table>
      <tr>
        <th>Edit</th>
        <th>Datacentre</th>
        <th>Instance Name</th>  
        <th>Ip Segment</th>
        <th>Msrslno</th>
        <th>Nesdcode</th>
        <th>Portal Category</th>
        <th>Primary Apache Conf</th>
        <th>Primary Apache Ssl</th>
        <th>Primary App Node1</th>
        <th>Primary App Node2</th>
        <th>Primary App Script11</th>
        <th>Primary App Script12</th>
        <th>Primary App Script21</th>
        <th>Primary App Script22</th>
        <th>Primary App User</th>
        <th>Primary Blue Worker</th>
        <th>Primary DbNrdr Node</th>
        <th>Primary Gep Balancer</th>
        <th>Primary Green Worker</th>
        <th>Primary Mob Script11</th>
        <th>Primary Mob Script21</th>
        <th>Primary Rep Script11</th>
        <th>Primary Rep Script21</th>
        <th>Primary Rep User</th>
        <th>Primary Web Node1</th>
        <th>Primary Web Node2</th>
        <th>Primary Web Script1</th>
        <th>Primary Web Script2</th>
        <th>Primary Worker File</th>
        <th>Running From</th>
        <th>Storage Box</th>
        <th>Url</th>
        <th>Xmluserid</th>
        <th>Primary DB Backup Node</th>
        <th>Primary DB Backup Path</th>
      </tr>
      <tr v-for="item in gridData" :key="item.id">
        <td><Button @click="edit(item.instancename)" class="edit">Edit</Button>&nbsp;
        <button @click="deleteData(item.instancename)" class="edit">Delete</button></td>
        <td>{{ item.datacentre }}</td>
        <td>{{ item.instancename }}</td>
        <td>{{ item.ip_segment }}</td>
        <td>{{ item.msrslno }}</td>
        <td>{{ item.nesdcode }}</td>
        <td>{{ item.portal_category }}</td>
        <td>{{ item.primary_apacheconf }}</td>
        <td>{{ item.primary_apachessl }}</td>
        <td>{{ item.primary_appnode1 }}</td>
        <td>{{ item.primary_appnode2 }}</td>
        <td>{{ item.primary_appscript11 }}</td>
        <td>{{ item.primary_appscript12 }}</td>
        <td>{{ item.primary_appscript21 }}</td>
        <td>{{ item.primary_appscript22 }}</td>
        <td>{{ item.primary_appuser }}</td>
        <td>{{ item.primary_blueworkder }}</td>
        <td>{{ item.primary_dbnrdrnode }}</td>
        <td>{{ item.primary_gepbalancer }}</td>
        <td>{{ item.primary_greenworkder }}</td>
        <td>{{ item.primary_mobscript11 }}</td>
        <td>{{ item.primary_mobscript21 }}</td>
        <td>{{ item.primary_repscript11 }}</td>
        <td>{{ item.primary_repscript21 }}</td>
        <td>{{ item.primary_repuser }}</td>
        <td>{{ item.primary_webnode1 }}</td>
        <td>{{ item.primary_webnode2 }}</td>
        <td>{{ item.primary_webscript1 }}</td>
        <td>{{ item.primary_webscript2 }}</td>
        <td>{{ item.primary_workerfile }}</td>
        <td>{{ item.running_from }}</td>
        <td>{{ item.storage_box }}</td>
        <td>{{ item.url }}</td>
        <td>{{ item.xmluserid }}</td>
        <td>{{ item.primary_dbbackuppath }}</td>
        <td>{{ item.primary_dbbackupnode }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

const BASE_URL = 'http://192.168.0.108:8001';

export default {
  // props: ['instancename'],
  data() {
    return {
      gridData: []
    };
  },
  methods: {
    // deleteData(instancename){
    //     axios.delete(`http://192.168.0.109:8000/deleteConfigMaster?instancename=${instancename}`)
    //         .then(response => {
    //         alert(response.data.message);
    //         })
    //         .catch(error => {
    //         console.error('Error saving config:', error);
    //         alert('Error saving config: ' + error.message);
    //         });
    //     },
    deleteData(instancename) {
    axios.delete(`${BASE_URL}/deleteConfig?table=gepnicas_primary_infra&instancename=${instancename}`)
        .then(response => {
            alert(response.data.message);
            this.takeGridData()
        })
        .catch(error => {
            console.error('Error deleting config:', error);
            alert('Error deleting config: ' + error.message);
        });
    },
    takeGridData() {
      axios.get(`${BASE_URL}/getConfig?table=gepnicas_primary_infra`)
      // axios.get('http://192.168.0.109:8111/getConfig?table=gepnicas_primary_infra')
        .then(response => {
          this.gridData = response.data;
          console.log(this.gridData);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
    addInstance() {
      this.$emit('add-instance'); 
    },
    edit(instancename){
      this.$emit('edit', instancename)
    }
    // editConfig(instancename) {
    //   axios.get(`http://192.168.0.113:8000/getConfigMaster?instancename=${instancename}`)
    //     .then(response => {
    //       console.log('gotresponse')
    //       this.config = response.data;
    //     })
    //     .catch(error => {
    //       console.error('Error saving config:', error);
    //       alert('Error saving config: ' + error.message);
    //     });
    // }
  },
  mounted() {
    this.takeGridData();
  }
};
</script>

<style scoped>

table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid black;
  padding: 8px;
  white-space: nowrap;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
.edit{
  padding: 6px;
  background-color: #2f6b77;
  border-radius: 5px;
  color: white;
}
.edit:hover{
  background-color: #1a4d57;
}
.buttonclass {
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>
