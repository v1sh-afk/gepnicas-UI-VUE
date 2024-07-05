<template>
    <div class="overflow-auto total">
        <b-pagination 
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        first-number
        last-number
        @input="currentPageChanged"
        ></b-pagination>

        <div id="search_c">
        <input type="text" placeholder="Search" v-model='search_text'>
        </div>

        <p class="mt-3">Current Page: {{ currentPage }}</p>

        <div id="rad">
            <div id="radiobutton">
            <div>
                <input type="radio" v-model="selectedOption" value="Bids">
                <label>Bids</label><br>
            </div>
            <div>
                <input type="radio" v-model="selectedOption" value="Tenders" checked >
                <label>Tenders</label>
            </div>
            </div>
        </div>


        <b-table
        id="my-table"
        :items="currentItems"
        :per-page="perPage"
        :current-page="currentPage"
        small
        ></b-table>
    </div>
</template>

<script>
import { BPagination, BTable } from 'bootstrap-vue-next';
export default {
    components:{
        BPagination: () => import('bootstrap-vue-next').then(({ BPagination }) => BPagination),
        BTable: () => import('bootstrap-vue-next').then(({ BTable }) => BTable),
    },
    watch: {
    selectedOption(newVal) {
      if (newVal) {
        this.changeBids();
      }
    }},
    props: {
        currentPage: Number,
        perPage: Number,
        selectedOption: String,
        bidstenders: Object
    },
    data(){
        return{
            currentPage : this.currentPage,
            selectedOption : 'Tenders',
            displayTenders: true
        }
    },
    computed: {
        currentItems() {
            return this.displayTenders ? this.bidstenders.tenders : this.bidstenders.bids;
        },
        rows() {
            return this.bidstenders.tenders.length;
        }
    },
    methods:{
        currentPageChanged(page) {
            this.$emit('update:currentPage', page);
        },
        changeBids() {
            this.displayTenders = !this.displayTenders;
        }
    }
}
</script>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
</style>