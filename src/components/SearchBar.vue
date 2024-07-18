<template>
  <div id="menu">
    <div class="date">
      <img class="menuicon" @click="homePage" src="/src/assets/home.png" alt="Home">
      <p>{{ date }}</p>
    </div>
    <div class="menu-content">
      <div class="menu-item">
        <div class="menuu">
          <!-- <p class="menu-link" @click="handleInfraInventoryClick">Infra Inventory</p> -->
        </div>
      </div>
      <div class="menu-item">
        <div class="menuu">
        </div>
      </div>
      <!-- <div class="menu-item">
        <a>Site Settings</a>
      </div> -->
      <div class="menu-item rightmost">
        <a href="#" @click="toggleDropdown">Site Settings</a>
        <div class="dropdown-content" v-if="dropdownVisible">
          <a @click="handleDropdownClick(handleInfraInventoryClick)">Infra Inventory - Primary</a>
          <a @click="handleDropdownClick(handleInfraInventoryDRClick)">Infra Inventory - DR</a>
          <a @click="handleDropdownClick(handleSettingsClick)">Settings</a>
          <a @click="handleDropdownClick(handleUserManagementClick)">Manage Users</a>
        </div>
      </div>
      <div class="menu-item">
        <!-- <p class="menu-link" @click="handleUserManagementClick">User Management</p> -->
      </div>
      <div class="menu-item">
        <div class="menuu">
          <!-- <p class="menu-link" @click="handleSettingsClick">Settings</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: this.getTime(),
      dropdownVisible: false
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
    toggleDropdown(event) {
      event.preventDefault();
      this.dropdownVisible = !this.dropdownVisible;
    },
    handleDropdownClick(action) {
      action();
      this.dropdownVisible = false; // Hide the dropdown
    },
    handleSettingsClick() {
      this.$emit('settingsclicked');
    },
    handleInfraInventoryClick() {
      this.$emit('infraclicked');
      console.log('Infra Inventory clicked');
    },
    handleInfraInventoryDRClick() {
      this.$emit('infradrclicked');
      console.log('Infra Inventory DR clicked');
    },
    handleHomeClick() {
      console.log('Home clicked');
      this.$emit('homeclicked');
    },
    handleUserManagementClick() {
      console.log('User Management Clicked');
    },
    homePage(){
      console.log('Home clicked');
      // this.$router.push({ path: '/' });
      this.handleHomeClick();
    }
  }
}
</script>

<style scoped>
#menu {
  width: 100%;
  background-color: #2f6b77;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px; 
  box-sizing: border-box;
}

.date {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

/* .menu-content {
  width: 80%;
  display: flex;
  justify-content: flex-end; 
}

.menu-item {
  display: flex;
  align-items: center;
} */
.menu-item {
  position: relative;
  display: inline-block;
  margin-right: 20px;
}

.menu-item a {
  text-decoration: none;
  color: white;
  padding: 10px;
  display: block;
}

.dropdown-content {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  cursor: pointer;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
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
  padding: 0 5px; 
}

.menu-link:hover {
  text-decoration: underline;
}
</style>
