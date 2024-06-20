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
  }
}

</script>

<template>
<TopBar/>
<SearchBar />
<TopSection />
<InstanceSection />

<Footer />
</template>

<style>

</style>