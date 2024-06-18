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
        <h4>Instances</h4>
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
margin-right: 50px;
border: 2px solid black;
border-radius: 15px;
padding-top: 7px;
}

img{
    margin-left: 20px;
}
</style>