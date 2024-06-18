<script>
export default{
    computed: {
        user_i() {
            return 'src/assets/user.png';
        },
        setting_i(){
            return 'src/assets/settings.png'
        }
    }
}
</script>

<template>
    <div id="container">
        <div>
            <input id="search" type="text" placeholder="Search">
        </div>
        <div id="imgs">
            <img class="home" :src="user_i"> 
            <img class="home" :src="setting_i">
        </div>
    </div>


</template>

<style>
#container{
    display: flex;
    justify-content: end;
    gap: 510px;
}
#search{
    margin-right: 10px;
    border-radius: 20px;
}
input{
    width: 300px;
    height: 30px;
}
#imgs{
    display: flex;
    gap: 20px;
}

</style>