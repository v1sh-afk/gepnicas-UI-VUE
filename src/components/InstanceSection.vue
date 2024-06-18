<script>
export default{
    data(){
        return{
            instances : ['tn', 'kl','wb', 'andaman']
        }
    },
    methods: {
        giveIlink(state){
            return 'src/assets/'+state+'.png';
        }
    }
}
</script>

<template>
    <div id="instance">
        <img class="logo" v-for="instance in instances" :src="giveIlink(instance)">
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
border: 2px solid black;
border-radius: 15px;
}
</style>