<script>
export default{
    computed:{
        image() {
            return 'src/assets/home.png';
        },
        logout_i() {
            return 'src/assets/logout.png';
        }
    },
    data(){
        return{
            currentUser: 'Ranjith'
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
        }
    }
}
</script>

<template>
    <div id="top">
        <div class="left">
            <!-- <img class="home" :src="image"> -->
            <h1 id="title">GePNIC Archival System</h1>
        </div>

        <div >

        </div>

        <div class="right">
            <p id="welcomep">Welcome {{ currentUser }} </p>
            <div class="logout-container">
                <p>Logout</p>
                <!-- <img class="home" :src="logout_i"> -->
            </div>
        </div>
       
        
    </div>
    
</template>

<style scoped>
/* #title{
    margin-bottom: 0px;
}
p{
    margin-bottom: 0;
}
.left{
    display: flex;
    gap: 20px;
}
.right{
    display: flex;
    gap: 20px;
}
#top{
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.home{
    height: 30px;
}
.logout-container{
    display: flex;
    align-items: center;
    gap: 2px;
} */
#title{
    color: white;
}

h1{
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.home{
    height: 2.5em;
    margin-top: 1.5rem
}

#top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #09222E;
}

.left{
    display: flex;
    gap: 1.25em;
}

.right{
    display: flex;
    gap: 1.25em;
}

.logout-container {
    display: flex;
    align-items: center; 
}

.logout-container p {
    margin: 0; 
    margin-right: 0.2em; 
}

.logout-container img.home {
    width: 1.9em; 
    height: 1.9em; 
}  


</style>