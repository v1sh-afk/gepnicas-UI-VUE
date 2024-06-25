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
            <img class="home" :src="user_i">
            <img class="home" :src="setting_i">
        </div>
    </div>
</template>


<style scoped>
h1{
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}
.home{
    height: 2.5em;
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
    width: 39.75em; /* 300px to em */
    height: 1.875em; /* 30px to em */
    margin-right: 0.625em; /* 10px to em */
    border-radius: 1.25em; /* 20px to em */
}

#imgs {
    display: flex;
    gap: 1.25em; /* 20px to em */
}

#search_c {
    display: flex;
    justify-content: center; 
    align-items: center; 
    margin-left: 14em;
}

</style>
