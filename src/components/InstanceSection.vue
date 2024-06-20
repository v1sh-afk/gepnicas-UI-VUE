<script>
import axios from 'axios';
export default{
    data(){
        return{
            instances : ['tn', 'kl','wb', 'andaman','tn', 'kl','wb', 'andaman','tn', 'kl','wb', 'andaman','andaman','andaman','andaman'],
            idd : 0,
            infodiv : false,
            response: ''
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
        getImageValue(imageId) {
            imageId = 'img2'
            this.infodiv = true
            axios.post('http://192.168.0.104:5000/getValue', { imageId: imageId })
            .then(response => {
                this.response = response.data.value;
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
        }
}
</script>

<template>
    <div id="instance">
        <h4>Instances</h4>
        <div class="scroll-buttons">
        <button @click="scrollLeft">‹</button>
        <div class="scroll-container" ref="scrollContainer">
            <img class="logo" :id="`i${index+1}`" v-for="(instance, index) in instances" :src="giveIlink(instance)" @click="getImageValue(`i${index+1}`)">
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
.detail_logos{
    height: 70px;
    width: 70px;
}
.detail{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    margin-right: 15px;
    
}

.details{
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    border: 2px solid black;
    border-radius: 15px;
    margin-top: 5px;
}
.logo{
    width: 100px;
    height: 100px;
}
#instance{
margin-top: 2em;
margin-left: 3em;
margin-right: 6em;
border: 2px solid black;
border-radius: 0.625em;
padding-top: 1px;
padding-left: 0.625em;
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
    padding: 10px 0;
}
.scroll-container::-webkit-scrollbar {
    display: none; 
}
button {
    background-color: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
}
img{
    margin-left: 20px;
    /* padding: 10px; */
}
</style>