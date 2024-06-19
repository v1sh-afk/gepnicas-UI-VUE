<script>
import TopBar from './components/TopBar.vue';
import SearchBar from './components/SearchBar.vue';
import TopSection from './components/TopSection.vue';
import InstanceSection from './components/InstanceSection.vue';
import JobSection from './components/JobSection.vue';

export default {
  components: {
    TopBar,
    SearchBar,
    TopSection,
    InstanceSection,
    JobSection
  }
}

</script>

<template>
<TopBar/>
<SearchBar />
<TopSection />
<InstanceSection />
<JobSection />
</template>

<style>

</style>