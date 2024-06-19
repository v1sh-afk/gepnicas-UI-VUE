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
            this.infodiv = true
            axios.post('http://192.168.0.104/getValue', { imageId: imageId })
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
        <div class="detail">
            <h3>Details</h3>
            <p>{{ response }}</p>
            <img class="detail_logos" :src="folder">
            <img class="detail_logos" :src="complete"> 
        </div>
    </div>
</template>

<style scoped>
.detail_logos{
    height: 70px;
    width: 70px;
}
.detail{
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    border: 2px solid black;
    border-radius: 15px;
    margin-top: 10px;
}
.logo{
    width: 100px;
    height: 100px;
}
#instance{
margin-top: 10px;
margin-left: 50px;
margin-right: 50px;
border: 2px solid black;
border-radius: 15px;
padding-top: 7px;
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
}
</style>