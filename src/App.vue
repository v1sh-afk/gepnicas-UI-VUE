<template>
  <div>
    <TopBar />
    <SearchBar @settingsclicked="goToSettings"/>
    <!-- <router-view v-if="!showSettings && !showForm"/> -->
    <PortalSettings v-if="showSettings" @back="goToSettings"/>
    <TopSection v-if="!showSettings && !showForm" @open-form="toggleForm"/>
    <!-- <Storageform v-if="showForm" @back="toggleForm"/> -->
    <InstanceSection v-if="!showSettings && !showForm"/>
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
import { onBeforeUnmount } from 'vue';
import Storageform from './components/Storageform.vue'; 


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
      isFooterVisible: false,
      showSettings: false,
      showForm : false,
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
    toggleForm(){
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

</style>
