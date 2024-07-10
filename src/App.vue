<template>
  <div>
    <TopBar />
    <SearchBar @infraclicked="goToGrid" @settingsclicked="goToSettings"/>
    <!-- <router-view v-if="!showSettings && !showForm"/> -->
    <PortalSettings v-if="showSettings && !showGrid" @back="goToSettings"/>
    <!-- <InfraSettings v-if="showInfra" @back="goToInfra"/> -->
    <InventoryGrid v-if="showGrid" @back="goToGrid"></InventoryGrid>
    <TopSection v-if="!showSettings && !showInfra && !showForm && !showGrid" @open-form="toggleForm"/>
    <!-- <Storageform v-if="showForm" @back="toggleForm"/> -->
    <InstanceSection v-if="!showSettings && !showInfra && !showForm && !showGrid"/>
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
import InfraSettings from './components/InfraSettings.vue';
import InventoryGrid from './components/InventoryGrid.vue';

export default {
  components: {
    TopBar,
    SearchBar,
    TopSection,
    InstanceSection,
    Footer,
    PortalSettings,
    Storageform
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
    },
    goToGrid() {
      this.showGrid = !this.showGrid;
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
