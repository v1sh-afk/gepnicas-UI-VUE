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
    margin-top: 15px;
    margin-bottom: 15px;
}

.home{
    height: 40px;
}

#top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left{
    display: flex;
    gap: 20px;
}

.right{
    display: flex;
    gap: 20px;
}

.logout-container {
    display: flex;
    align-items: center; 
}

.logout-container p {
    margin: 0; 
    margin-right: 3px; 
}

.logout-container img.home {
    width: 30px; 
    height: 30px; 
} 
</style>