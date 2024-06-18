<script>
export default{
    data(){
        return{
            instances : ['tn', 'kl','wb', 'andaman','tn', 'kl','wb', 'andaman','tn', 'kl','wb', 'andaman','andaman','andaman','andaman']
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
            <img class="logo" v-for="instance in instances" :src="giveIlink(instance)">
        </div>
        <button @click="scrollRight">›</button>
        </div>
    </div>
</template>

<style>
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