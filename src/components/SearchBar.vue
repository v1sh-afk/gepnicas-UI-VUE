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
        <div id="search_c">
            <input type="text" placeholder="Search">
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
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
}

input{
    width: 300px;
    height: 30px;
    margin-right: 10px;
    border-radius: 20px;
}
#search_c{
    display: flex;
    flex-grow: 1;
    justify-content: center;
}
#imgs{
    display: flex;
    gap: 20px;
    justify-self: end;
}

</style>