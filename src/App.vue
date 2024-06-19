<script>
import TopBar from './components/TopBar.vue';
import SearchBar from './components/SearchBar.vue';
import TopSection from './components/TopSection.vue';
import InstanceSection from './components/InstanceSection.vue';
export default {
  components: {
    TopBar,
    SearchBar,
    TopSection,
    InstanceSection
  }
}

</script>

<template>
<TopBar/>
<SearchBar />
<TopSection />
<InstanceSection />
</template>

<style>

</style>