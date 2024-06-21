<script>
import axios from 'axios';
export default {
    data() {
        return {
            instances: [],
            infodiv: false,
            response: [],
            details: {},  // Change from array to object
            dashboard: {}
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
            axios.get('http://192.168.0.103:5000/getImages')
                .then(response => {
                    this.response = response.data;
                    console.log(this.response);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        getDashboard() {
            axios.get('http://192.168.0.103:5000/getInstanceCountAll')
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
            this.infodiv = true;
            this.details = {};  // Clear the details before fetching new data
            axios.get(`http://192.168.0.103:5000/getInstanceCount?instancename=${iname}`)
                .then(response => {
                    this.details = response.data;  // Assign the entire response to details
                    console.log(this.details);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
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
                    <div class="instance-name">{{ dashboard.counts.total_count }}</div>
                </div>
                <div class="detail1">
                    <img class="detail_logos" :src="complete">
                    <div class="instance-name">{{ dashboard.counts.sync_completed_count }}</div>
                </div>
                <div class="detail1">
                    <img class="detail_logos" :src="process">
                    <div class="instance-name">{{ dashboard.counts.soft_link_created }}</div>
                </div>
                <div class="detail1">
                    <img class="detail_logos" :src="link">
                    <div class="instance-name">{{ dashboard.counts.meta_link_created }}</div>
                </div>
                <div class="detail1">
                    <img class="detail_logos" :src="error">
                    <div class="instance-name">{{ dashboard.counts.errors_count }}</div>
                </div>
                <div class="detail1">
                    <img class="detail_logos" :src="db">
                    <div class="instance-name">{{ dashboard.counts.instance_storage_size }}</div>
                </div>
            </div>
        </div>
        
        <!-- Instances Section -->
        <div id="instance">
            <h4>Instances</h4>
            <div class="scroll-buttons">
                <button @click="scrollLeft">‹</button>
                <div class="scroll-container" ref="scrollContainer">
                    <div class="instance-item" v-for="(instance, index) in response" :key="index">
                        <img class="logo" :id="`i${index+1}`" :src="imageSrc(instance.logo)" @click="buttonClick(instance.instancename)">
                        <div class="instance-name">{{ instance.instancename }}</div>
                    </div>
                </div>
                <button @click="scrollRight">›</button>
            </div>
        </div>
        
        <!-- Individual Instance Details -->
        <div id="infoDiv" v-if="infodiv && details.counts">
            <div class="details">
                <h3>&nbsp; &nbsp; Details</h3>
                <div class="detail">
                    <div class="cols">
                        <img class="detail_logos" :src="folder">
                        <div class="instance-name">{{ details.counts.total_count }}</div>
                    </div>
                    <div class="cols">
                        <img class="detail_logos" :src="complete">
                        <div class="instance-name">{{ details.counts.sync_completed_count }}</div>
                    </div>
                    <div class= "cols">
                        <img class="detail_logos" :src="process">
                        <div class="instance-name">{{ details.counts.soft_link_created }}</div>
                    </div>
                    <div class="cols">
                        <img class="detail_logos" :src="link">
                        <div class="instance-name">{{ details.counts.meta_link_created }}</div>
                    </div>
                    <div class="cols">
                        <img class="detail_logos" :src="error">
                        <div class="instance-name">{{ details.counts.errors_count }}</div>
                    </div>
                    <div class="cols">
                        <img class="detail_logos" :src="db">
                        <div class="instance-name">{{ details.counts.instance_storage_size }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add some blank space here for the footer -->
    <div style="height: 5em;"></div> <!-- Adjust height as needed -->
    </div>
</template>


<style scoped>
.detail_logos {
    height: 4.375em; /* 70px to em */
    width: 4.375em; /* 70px to em */
}

.detail {
    display: flex;
    justify-content: space-between;
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
    justify-content: space-between;
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
    margin-top: 2em;
    margin-left: 3em;
    margin-right: 6em;
    border: 0.125em solid black; /* 2px to em */
    border-radius: 0.625em; /* 10px to em */
    padding-top: 0.0625em; /* 1px to em */
    padding-left: 0.625em; /* 10px to em */
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
button {
    background-color: white;
    color: rgb(51, 0, 255); /* Set the text color to a blue shade */
    border: none;
    font-size: 2.5em; /* Increase the font size to make the symbols larger */
    cursor: pointer;
    padding: 0.5em 0.2em; /* Add some padding for better look and feel */
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
.instance-name {
    font-weight: bold;
    margin-left: 2.5em;
    font-size: 1em; /* Adjust font size as needed */
    margin-top: 0.5em; /* Adjust margin to control spacing */
}

.detail1,
.cols{
    display: flex;
    flex-direction: column;
}

#mainDashboard {
    text-align: center; /* Center the text inside the div */
}
</style>
