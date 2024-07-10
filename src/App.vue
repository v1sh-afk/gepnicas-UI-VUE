<template>
  <div>
    <TopBar />
    <SearchBar @infraclicked="goToGrid" @settingsclicked="goToSettings"/>
    <PortalSettings v-if="showSettings && !showGrid" @back="goToSettings"/>
    <InventoryGrid v-if="showGrid && !showSettings" @back="goToGrid"/>
    <TopSection v-if="!showSettings && !showGrid && !showForm" @open-form="toggleForm"/>
    <InstanceSection v-if="!showSettings && !showGrid && !showForm"/>
    <BidsTenders />
    <Footer ref="footer" />
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
    InventoryGrid
  },
  data() {
    return {
      showGrid: false,
      isFooterVisible: false,
      showSettings: false,
      showForm: false,
      showInfra: false,
    };
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const footer = this.$refs.footer.$el; // Access the actual element
      
      if (scrollPosition > 200) {  // Adjust the scroll position threshold as needed
        footer.classList.remove('hidden-footer');
      } else {
        footer.classList.add('hidden-footer');
      }
    },
    goToSettings() {
      this.showSettings = !this.showSettings;
      if (this.showSettings) {
        this.showGrid = false;
      }
    },
    goToGrid() {
      this.showGrid = !this.showGrid;
      if (this.showGrid) {
        this.showSettings = false;
      }
    },
    toggleForm() {
      this.showForm = !this.showForm; // Toggle the showForm state
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
