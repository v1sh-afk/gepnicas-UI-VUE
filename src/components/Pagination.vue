<!-- <template>
    <div class="overflow-auto total">
      <b-pagination 
        :model-value="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        aria-controls="my-table"
        first-number
        last-number
        @update:model-value="currentPageChanged"
      ></b-pagination>
  
      <div id="search_c">
        <input type="text" placeholder="Search" v-model="search_text">
      </div>
  
      <p class="mt-3">Current Page: {{ currentPage }}</p>
  
      <div id="rad">
        <div id="radiobutton">
          <div>
            <input type="radio" v-model="selectedOption" value="Bids">
            <label>Bids</label><br>
          </div>
          <div>
            <input type="radio" v-model="selectedOption" value="Tenders">
            <label>Tenders</label>
          </div>
        </div>
      </div>
  
      <b-table
        id="my-table"
        :items="filteredItems"
        :per-page="perPage"
        :current-page="currentPage"
        small
      ></b-table>
    </div>
  </template>
  
  <script>
  import { BPagination, BTable } from 'bootstrap-vue-next';
  
  export default {
    components: {
      BPagination: () => import('bootstrap-vue-next').then(({ BPagination }) => BPagination),
      BTable: () => import('bootstrap-vue-next').then(({ BTable }) => BTable),
    },
    props: {
      currentPage: Number,
      perPage: Number,
      selectedOption: String,
      bidstenders: Object,
    },
    data() {
      return {
        search_text: '',
        selectedOption: 'Tenders',
      };
    },
    computed: {
      filteredItems() {
        const items = this.selectedOption === 'Tenders' ? this.bidstenders.tenders : this.bidstenders.bids;
        if (!this.search_text.trim()) {
          return items;
        } else {
          const searchTerm = this.search_text.trim().toLowerCase();
          return items.filter(item => {
            // Customize this logic based on your data structure
            return Object.values(item).some(value =>
              value.toLowerCase().includes(searchTerm)
            );
          });
        }
      },
      totalRows() {
        return this.selectedOption === 'Tenders' ? this.bidstenders.tenders.length : this.bidstenders.bids.length;
      },
    },
    methods: {
      currentPageChanged(page) {
        this.$emit('update:currentPage', page);
      },
    },
  };
  </script>
  
  <style scoped>
  @import 'bootstrap/dist/css/bootstrap.css';
  @import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
  </style> -->

<template>
  <div class="overflow-auto total">
    <b-pagination 
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      aria-controls="my-table"
      first-number
      last-number
      @input="currentPageChanged"
    ></b-pagination>

    <div id="search_c">
      <input type="text" placeholder="Search" v-model="search_text">
    </div>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <div id="rad">
      <div id="radiobutton">
        <div>
          <input type="radio" v-model="selectedOption" value="Bids">
          <label>Bids</label><br>
        </div>
        <div>
          <input type="radio" v-model="selectedOption" value="Tenders">
          <label>Tenders</label>
        </div>
      </div>
    </div>

    <b-table
      id="my-table"
      :items="filteredItems"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>
</template>

<script>
import { BPagination, BTable } from 'bootstrap-vue-next';

export default {
  components: {
    BPagination: () => import('bootstrap-vue-next').then(({ BPagination }) => BPagination),
    BTable: () => import('bootstrap-vue-next').then(({ BTable }) => BTable),
  },
  props: {
    currentPage: Number,
    perPage: Number,
    selectedOption: String,
    bidstenders: Object,
  },
  data() {
    return {
      currentPage: this.currentPage,
      search_text: '',
      selectedOption: 'Tenders',
    };
  },
  computed: {
    filteredItems() {
      const items = this.selectedOption === 'Tenders' ? this.bidstenders.tenders : this.bidstenders.bids;
      if (!this.search_text.trim()) {
        return items;
      } else {
        const searchTerm = this.search_text.trim().toLowerCase();
        return items.filter(item => {
          // Customize this logic based on your data structure
          return Object.values(item).some(value =>
            value.toLowerCase().includes(searchTerm)
          );
        });
      }
    },
    totalRows() {
      return this.selectedOption === 'Tenders' ? this.bidstenders.tenders.length : this.bidstenders.bids.length;
    },
  },
  methods: {
    currentPageChanged(page) {
      this.$emit('update:currentPage', page);
    },
  },
};
</script>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
</style>