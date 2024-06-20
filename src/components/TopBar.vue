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
            date: this.getTime(),
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
            <img class="home" :src="image">
            <p>{{ date }}</p>
        </div>

        <div><h1>GePNIC Archival System</h1></div>

        <div class="right">
            <div><p>Welcome {{ currentUser }} </p></div>
            <div class="logout-container">
                <p>Logout</p>
                <img class="home" :src="logout_i">
            </div>
        </div>
       
        
    </div>
    
</template>

<style>
h1{
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.home{
    height: 2.5em;
}

#top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: blue; */
    /* border-bottom: 2px solid black; */
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