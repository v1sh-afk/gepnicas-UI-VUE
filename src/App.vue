<template>
  <div>
    <TopBar />
    <SearchBar @infraclicked="goToGrid" @settingsclicked="goToSettings" @homeclicked="handleHomeClick" @infradrclicked="goToDRGrid"/>
    <PortalSettings v-if="showSettings && !showGrid" @back="goToSettings"/>
    <InventoryGrid v-if="showGrid && !showSettings && !showInfra && !showEdit" @back="goToGrid" @edit="editRecord" @addInstance="showInfraInventory"/>
    <InfraInventory v-if="showInfra" @back="hideInfraInventory"/>
    <EditInventory v-if="showEdit" :instancename="editingInstance" @back="goToGrid"/>

    <InventoryGridDR v-if="showDRGrid && !showSettings && !showInfraDR && !showEditDR" @back="goToDRGrid" @edit="editRecordDR" @addInstance="showInfraInventoryDR"/>
    <InfraInventoryDR v-if="showInfraDR" @back="hideInfraInventoryDR"/>
    <EditInventoryDR v-if="showEditDR" :instancename="editingInstance" @back="goToDRGrid"/>

    <TopSection v-if="!showSettings && !showGrid && !showForm && !showInfra && !showEdit && !showDRGrid && !showInfraDR && !showEditDR" @open-form="toggleForm"/>
    <InstanceSection v-if="!showSettings && !showGrid && !showForm && !showInfra && !showEdit && !showDRGrid && !showInfraDR && !showEditDR"/>
    <BidsTenders />
    <!-- <Footer ref="footer" /> -->
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import SearchBar from './components/SearchBar.vue';
import TopSection from './components/TopSection.vue';
import InstanceSection from './components/InstanceSection.vue';
import Footer from './components/Footer.vue';
import PortalSettings from './components/PortalSettings.vue';
import Storageform from './components/Storageform.vue';
import InfraInventory from './components/InfraInventory.vue';
import InventoryGrid from './components/InventoryGrid.vue';
import EditInventory from './components/EditInventory.vue';
import InventoryGridDR from './components/InventoryGridDR.vue';
import InfraInventoryDR from './components/InfraInventoryDR.vue';
import EditInventoryDR from './components/EditInventoryDR.vue';

export default {
  components: {
    TopBar,
    SearchBar,
    TopSection,
    InstanceSection,
    Footer,
    PortalSettings,
    Storageform,
    InfraInventory,
    InventoryGrid,
    EditInventory,
    InventoryGridDR,
    InfraInventoryDR,
    EditInventoryDR
  },
  data() {
    return {
      showGrid: false,
      showSettings: false,
      showForm: false,
      showInfra: false,
      showEdit: false,
      showDRGrid: false,
      showInfraDR: false,
      showEditDR: false,
      editingInstance: ''
    };
  },
  methods: {
    editRecord(instancename) {
      this.editingInstance = instancename;
      this.showEdit = true;
      this.showInfra = false;
      this.showGrid = false;
      this.showSettings = false;
    },
    editRecordDR(instancename) {
      this.editingInstance = instancename;
      this.showEditDR = true;
      this.showInfraDR = false;
      this.showDRGrid = false;
      this.showSettings = false;
    },
    goToSettings() {
      this.showSettings = !this.showSettings;
      if (this.showSettings) {
        this.showGrid = false;
        this.showDRGrid = false;
      }
    },
    goToGrid() {
      this.showGrid = !this.showGrid;
      if (this.showGrid) {
        this.showSettings = false;
        this.showEdit = false;
        this.showInfra = false;
      }
    },
    goToDRGrid() {
      this.showDRGrid = !this.showDRGrid;
      if (this.showDRGrid) {
        this.showSettings = false;
        this.showEditDR = false;
        this.showInfraDR = false;
      }
    },
    toggleForm() {
      this.showForm = !this.showForm;
    },
    showInfraInventory() {
      this.showInfra = true;
      this.showGrid = false;
      this.showSettings = false;
    },
    hideInfraInventory() {
      this.showInfra = false;
      this.showGrid = true;
    },
    showInfraInventoryDR() {
      this.showInfraDR = true;
      this.showDRGrid = false;
      this.showSettings = false;
    },
    hideInfraInventoryDR() {
      this.showInfraDR = false;
      this.showDRGrid = true;
    },
    handleHomeClick() {
      this.showSettings = false;
      this.showGrid = false;
      this.showInfra = false;
      this.showForm = false;
      this.showEdit = false;
      this.showDRGrid = false;
      this.showInfraDR = false;
      this.showEditDR = false;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style>
/* Your styles here */
</style>
