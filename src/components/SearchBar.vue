<script>
export default {
    data() {
        return {
            date: this.getTime()
        }
    },
    computed: {
        user_i() {
            return 'src/assets/user.png';
        },
        setting_i() {
            return 'src/assets/settings.png';
        }
    },
    methods: {
        getTime() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); 
            const day = String(now.getDate()).padStart(2, '0');
            const hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';

            const date = `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
            return date;
        },
        handleSettingsClick(){
            this.$emit('settingsclicked');
        }
    }
}
</script>

<template>
    <!-- <div id="container">
        <div id="start">
        </div>
        <div id="imgs">
            <img class="homei" :src="user_i">
            <img class="homei" :src="setting_i">
        </div>
    </div> -->
    <div id="menu">
        <div class="date">
            <p>{{ date }}</p>
        </div>
        <div id="menubar">
            <p>fkh</p>
        </div>
        <div class="date2">
            <div class="menuu">
                <img class="menuicon" src="/src/assets/home.png">
                <p>Home</p>
            </div>
            <p>User Management</p>
            <div class="menuu">
                <img class="menuicon" src="/src/assets/settings2.png">
                <p id='date2' @click="handleSettingsClick">Settings</p>
            </div>
        </div>
    </div>

</template>


<style scoped>
.menuu{
    display: flex;
    align-items: center;
    gap: 3px;
}
.menuicon{
    width: 25px;
    height: 25px;
}
#menu{
    width: 100%;
    height: 25px;
}
.date2{
    background-color: #2f6b77;
    display: flex;
    width: 30%;
    justify-content: space-between;
    color: white;
    padding: 15px;
}
.date{
    display: flex;
    width: 20%;
    background-color: #2f6b77;
    color: white;
    justify-content: center;
    align-items: center;
    padding: 15px;
}
#menubar{
    background-color: #2f6b77;
    width: 70%;
    padding: 15px;

}
p{
    margin-top: 0;
    margin-bottom: 0;
    font-size: 14px;
}
#menu{
    display: flex;
}

/* Add this CSS */
#date2 {
  cursor: pointer;
}

#date2:hover {
  text-decoration: underline;
}

/* #imgs{
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
} */

</style>
