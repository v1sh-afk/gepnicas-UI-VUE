<template>
  <div id="menu">
    <div class="date">
      <p>{{ date }}</p>
    </div>
    <div class="menu-content">
      <div class="menu-item">
        <div class="menuu">
          <p class="menu-link" @click="handleInfraInventoryClick">Infra Inventory</p>
        </div>
      </div>
      <div class="menu-item">
        <div class="menuu">
          <img class="menuicon" src="/src/assets/home.png" alt="Home">
          <p class="menu-link" @click="handleHomeClick">Home</p>
        </div>
      </div>
      <div class="menu-item">
        <p class="menu-link" @click="handleUserManagementClick">User Management</p>
      </div>
      <div class="menu-item">
        <div class="menuu">
          <img class="menuicon" src="/src/assets/settings2.png" alt="Settings">
          <p class="menu-link" @click="handleSettingsClick">Settings</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: this.getTime()
    };
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

      const date = `${hours}:${minutes} ${ampm} ${day}-${month}-${year} `;
      return date;
    },
    handleSettingsClick() {
      this.$emit('settingsclicked');
    },
    handleInfraInventoryClick() {
      this.$emit('infraclicked');
      console.log('Infra Inventory clicked');
    },
    handleHomeClick() {
      console.log('Home clicked');
    },
    handleUserManagementClick() {
      console.log('User Management Clicked');
    }
  }
};
</script>

<style scoped>
#menu {
  width: 100%;
  background-color: #2f6b77;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px; /* Adjust padding as needed */
  box-sizing: border-box;
}

.date {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-content {
  width: 80%;
  display: flex;
  justify-content: flex-end; /* Align items to the right */
}

.menu-item {
  display: flex;
  align-items: center;
}

.menuu {
  display: flex;
  align-items: center;
  gap: 1px;
}

.menuicon {
  width: 25px;
  height: 25px;
  margin-right: -5px;
}

.menu-link {
  cursor: pointer;
  margin: 0;
  padding: 0 5px; /* Increase padding for better spacing */
}

.menu-link:hover {
  text-decoration: underline;
}
</style>
