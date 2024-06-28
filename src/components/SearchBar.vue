<script>
export default {
    computed: {
        user_i() {
            return 'src/assets/user.png';
        },
        setting_i() {
            return 'src/assets/settings.png';
        }
    }
}
</script>

<template>
    <div id="container">
        <div id="start">
        </div>
        <div id="search_c">
            <input type="text" placeholder="Search">
        </div>
        <div id="imgs">
            <img class="homei" :src="user_i">
            <img class="homei" :src="setting_i">
        </div>
    </div>
</template>


<style scoped>
#imgs{
    display: flex;
}
.homei{
    height: 2.5em;
}
h1{
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}
#container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#start {
    display: flex;
}

input {
    width: 39.75em; 
    height: 1.875em; 
    margin-right: 0.625em; 
    border-radius: 1.25em; 
}

#imgs {
    display: flex;
    gap: 1.25em; 
}

#search_c {
    display: flex;
    justify-content: center; 
    align-items: center; 
    margin-left: 14em;
}

</style>
