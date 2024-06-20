<script>
import axios from 'axios';
export default{
    data(){
        return{
            instances : ['tn', 'kl','wb', 'andaman','tn', 'kl','wb', 'andaman','tn', 'kl','wb', 'andaman','andaman','andaman','andaman'],
            idd : 0,
            infodiv : false,
            response: []
        }
    },
    methods: {
        giveIlink(state){
            return 'src/assets/'+state+'.png';
        },
        scrollLeft() {
            this.$refs.scrollContainer.scrollLeft -= 100;
        },
        scrollRight() {
            this.$refs.scrollContainer.scrollLeft += 100;
        },
        getImages(){
            axios.get('http://192.168.0.103:5000/getImages')
            .then(response => {
                this.response = response.data;
                console.log(this.rresponse)
            })
            .catch(error => {
            console.error('Error:', error);
            });
        },
        // getImageValue(imageId) {
        //     this.infodiv = true
        //     axios.post('http://192.168.0.103:5000/getImages', { imageId: imageId })
        //     .then(response => {
        //         this.response = response.data.value;
        //     })
        //     .catch(error => {
        //     console.error('Error:', error);
        //     });
            
        // }
        imageSrc(base){
            return `data:image/png;base64,${base}`;
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
  }
}
</script>

<template>
    <div id="instance" >
        <h4>Instances</h4>
        <div class="scroll-buttons">
        <button @click="scrollLeft">‹</button>
        <div class="scroll-container" ref="scrollContainer">
            <img class="logo" :id="`i${index+1}`" v-for="(instance, index) in response" :src="imageSrc(instance.logo)" >
            <!-- @click="getImageValue(`i${index+1}`) -->
        </div>
        <button @click="scrollRight">›</button>
        </div>
    </div>
    <div id="infoDiv" v-if="infodiv" >
        <div class="details">
            <p>{{ response }}</p>
            <h3>  &nbsp; &nbsp; Details</h3>
            <div class="detail">
            <img class="detail_logos" :src="folder">
            <img class="detail_logos" :src="complete"> 
            <img class="detail_logos" :src="process"> 
            <img class="detail_logos" :src="link"> 
            <img class="detail_logos" :src="error"> 
            <img class="detail_logos" :src="db"> 
            </div>
        </div>
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
    background-color: transparent;
    border: none;
    font-size: 1.5em; /* 24px to em */
    cursor: pointer;
}
img {
    margin-left: 1.25em; /* 20px to em */
    /* padding: 10px; */
}
</style>
