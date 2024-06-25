<script>
import axios from 'axios';
export default {
    data() {
        return {
            instances: [],
            infodiv: false,
            response: [],
            details: {},  
            dashboard: {},
            bidstenders: {bids: [], tenders:[]},
            perPage: 10,
            currentPage: 1,
            showPage :   false
        };
    },
    methods: {
        giveIlink(state) {
            return 'src/assets/' + state + '.png';
        },
        scrollLeft() {
            this.$refs.scrollContainer.scrollLeft -= 100;
        },
        scrollRight() {
            this.$refs.scrollContainer.scrollLeft += 100;
        },
        getImages() {
            axios.get('http://192.168.0.109:5000/getImages')
                .then(response => {
                    this.response = response.data;
                    console.log(this.response);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        getDashboard() {
            axios.get('http://192.168.0.109:5000/getInstanceCountAll')
                .then(response => {
                    this.dashboard = response.data;
                    console.log(this.dashboard);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        imageSrc(base) {
            return `data:image/png;base64,${base}`;
        },
        buttonClick(iname) {
            this.infodiv = true
            this.showPage = false
            axios.get(`http://192.168.0.109:5000/getInstanceCount?instancename=${iname}`)
                .then(response => {
                    this.details = response.data;  
                    console.log(this.details);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        Totalfile(iname){
                this.showPage=true
                axios.get(`http://192.168.0.109:5000/getBidsTenderInstance?instancename=${iname}`)
                    .then(response => {
                        this.bidstenders.bids = response.data.bids; 
                        this.bidstenders.tenders = response.data.tenders; 
                        console.log(this.bidstenders.bids);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
        },
        Archived(iname){
                this.showPage=true
                axios.get(`http://192.168.0.109:5000/getBidsTenderInstanceArchived?instancename=${iname}`)
                    .then(response => {
                        this.bidstenders.bids = response.data.bids; 
                        this.bidstenders.tenders = response.data.tenders;  
                        console.log(this.bidstenders);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
        },
        Metalink(iname){
            axios.get(`http://192.168.0.109:5000/getBidsTenderInstanceMetalink?instancename=${iname}`)
                .then(response => {
                    this.bidstenders.bids = response.data.bids; 
                    this.bidstenders.tenders = response.data.tenders; 
                    console.log(this.bidstenders);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        Errorr(iname){
            axios.get(`http://192.168.0.109:5000/getBidsTenderInstanceError?instancename=${iname}`)
                .then(response => {
                    this.bidstenders.bids = response.data.bids; 
                    this.bidstenders.tenders = response.data.tenders; 
                    console.log(this.bidstenders);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },

    },
    computed: {
        folder() {
            return 'src/assets/folder.png';
        },
        complete() {
            return 'src/assets/complete.png';
        },
        process() {
            return 'src/assets/process.png';
        },
        link() {
            return 'src/assets/link.png';
        },
        error() {
            return 'src/assets/error.png';
        },
        db() {
            return 'src/assets/database.png';
        },
        rows() {
        return this.bidstenders.tenders.length;
      }
    },
    mounted() {
        this.getImages();
        this.getDashboard();
    }
};
</script>
<template>
    <div>
        <!-- Main Dashboard -->

        <div id="mainDashboard" v-if="dashboard.counts">
            <h3>Main Dashboard</h3>
            <div class="details1">
                <div class="detail1">
                    <img class="detail_logos" :src="folder">
                    <h5>Total Folders</h5>
                    <div class="instance-name">{{ dashboard.counts.total_count }}</div>
                </div>
                <div class="detail1">
                    <img class="detail_logos" :src="complete">
                    <h5>Folders Completed</h5>
                    <div class="instance-name">{{ dashboard.counts.sync_completed_count }}</div>
                </div>
                <div class="detail1">
                    <img class="detail_logos" :src="process">
                    <h5>Soft Links</h5>
                    <div class="instance-name">{{ dashboard.counts.soft_link_created }}</div>
                </div>
                <div class="detail1">
                    <img class="detail_logos" :src="link">
                    <h5>Meta Links</h5>
                    <div class="instance-name">{{ dashboard.counts.meta_link_created }}</div>
                </div>
                <div class="detail1">
                    <img class="detail_logos" :src="error">
                    <h5>Errors</h5>
                    <div class="instance-name">{{ dashboard.counts.errors_count }}</div>
                </div>
                <div class="detail1">
                    <img class="detail_logos" :src="db">
                    <h5>Storage</h5>
                    <div class="instance-name">{{ dashboard.counts.instance_storage_size }}</div>
                </div>
            </div>
        </div>
        
        <!-- Instances Section -->

        <div id="instance">
            <h4>Instances</h4>
            <div class="scroll-buttons">
                <button class="ba" @click="scrollLeft">‹</button>
                <div class="scroll-container" ref="scrollContainer">
                    <div class="instance-item" v-for="(instance, index) in response" :key="index">
                        <img class="logo" :id="`i${index+1}`" :src="imageSrc(instance.logo)" @click="buttonClick(instance.instancename)">
                        <div class="instance-name">{{ instance.instancename }}</div>
                    </div>
                </div>
                <button class="ba" @click="scrollRight">›</button>
            </div>
        </div>
        
        <!-- Individual Instance Details -->
         
        <div id="infoDiv" v-if="infodiv && details.counts">

            <div class="details">
                <div class="infodetail-name">
                    <img :src="imageSrc(details.counts.logo)" class="logo">
                    <div class="instance-name-detail">{{ details.instancename }}</div>
                </div>

                <div class="detail">
                    <div class="cols">
                        <img class="detail_logos" :src="folder" @click="Totalfile(details.instancename)">
                        <h5>Total Folders</h5>
                        <div class="instance-name">{{ details.counts.total_count }}</div>
                    </div>
                    <div class="cols">
                        <img class="detail_logos" :src="complete" @click="Archived(details.instancename)">
                        <h5>Archieved</h5>
                        <div class="instance-name">{{ details.counts.sync_completed_count }}</div>
                    </div>
                    <div class= "cols">
                        <img class="detail_logos" :src="process">
                        <h5>Soft Links</h5>
                        <div class="instance-name">{{ details.counts.soft_link_created }}</div>
                    </div>
                    <div class="cols">
                        <img class="detail_logos" :src="link" @click="Metalink(details.instancename)">
                        <h5>Meta Links</h5>
                        <div class="instance-name">{{ details.counts.meta_link_created }}</div>
                    </div>
                    <div class="cols">
                        <img class="detail_logos" :src="error" @click="Errorr(details.instancename)">
                        <h5>Errors</h5>
                        <div class="instance-name">{{ details.counts.errors_count }}</div>
                    </div>
                    <div class="cols">
                        <img class="detail_logos" :src="db">
                        <h5>Storage</h5>
                        <div class="instance-name">{{ details.counts.instance_storage_size }}</div>
                    </div>
                </div>


                <div class="overflow-auto" v-if="showPage">
                    <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                    ></b-pagination>

                    <p class="mt-3">Current Page: {{ currentPage }}</p>

                    <b-table
                    id="my-table"
                    :items="bidstenders.tenders"
                    :per-page="perPage"
                    :current-page="currentPage"
                    small
                    ></b-table>
                </div>

                

            </div>

            

        </div>
    <div style="height: 5em;"></div> <!-- Adjust height as needed -->
    </div>
</template>


<style scoped>
.bt{
  background-color: grey;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.instance-name-detail{
    font-weight: bold;
    /* margin-left: 2.5em; */
    margin-left: 0;
    font-size: 1em; /* Adjust font size as needed */
    margin-top: 40px

}
.infodetail-name{
    display: flex;
    flex-direction: row;
}
.detail_logos {
    height: 4.375em; /* 70px to em */
    width: 4.375em; /* 70px to em */
    margin-left: 0;

}

.detail {
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.9375em; /* 15px to em */
    margin-right: 0.9375em; /* 15px to em */
}
.details {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    border: 0.125em solid black; /* 2px to em */
    border-radius: 0.9375em; /* 15px to em */
    margin-top: 0.3125em; /* 5px to em */
}
.details1 {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    border: 0.125em solid black; /* 2px to em */
    border-radius: 0.9375em; /* 15px to em */
    margin-top: 0.5em; /* 5px to em */
    padding-top: 1em;
}
.logo {
    width: 6.25em; /* 100px to em */
    height: 6.25em; /* 100px to em */
}
#instance {
    border: 2px solid black;
    border-radius: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    overflow: hidden;
}
.scroll-buttons {
    display: flex;
    align-items: center;
}
.scroll-container {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 0.625em 0; /* 10px to em */
}
.scroll-container::-webkit-scrollbar {
    display: none;
}
.ba {
    background-color: white;
    color: rgb(51, 0, 255); 
    border: none;
    font-size: 2.5em; 
    cursor: pointer;
    padding: 0.5em 0.2em;
}
img {
    margin-left: 1.25em; /* 20px to em */
}
h4 {
    margin-top: 0.4em;
    margin-bottom: 0.4em;
}
.instance-item {
    text-align: center; /* Center-align text below each image */
}

h5{
    /* margin-left: 1em; */
    margin-top: 0;
    margin-bottom: 0;
}
.instance-name {
    font-weight: bold;
    /* margin-left: 2.5em; */
    margin-left: 0;
    font-size: 1em; /* Adjust font size as needed */
    margin-top: 0.5em; /* Adjust margin to control spacing */
}

.detail1,
.cols{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#mainDashboard {
    text-align: center; /* Center the text inside the div */
}
</style>
