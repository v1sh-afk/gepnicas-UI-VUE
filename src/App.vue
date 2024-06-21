<template>
  <div>
    <TopBar />
    <SearchBar />
    <TopSection />
    <InstanceSection />
    <Footer ref="footer" />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import SearchBar from './components/SearchBar.vue';
import TopSection from './components/TopSection.vue';
import InstanceSection from './components/InstanceSection.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    TopBar,
    SearchBar,
    TopSection,
    InstanceSection,
    Footer
  },
  data() {
    return {
      isFooterVisible: false,
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
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style>

</style>
