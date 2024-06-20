<template>
    <footer class="app-footer">
      <div class="footer-content">
        <img :src="logo2" alt="Company Logo2" class="footer-logo2" />
        <img :src="logo" alt="Company Logo" class="footer-logo" />
        <p>© 2024 National Informatics Centre. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  import logo from '@/assets/nic.png';
  import logo2 from '@/assets/gepnic.jpg';
  
  export default {
    name: 'Footer',
    data() {
      return {
        logo,
        logo2
      }
    }
  }
  </script>
  
  <style scoped>
  .app-footer {
    background-color: #f8f9fa;
    text-align: center;
    padding: 1em 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 0.0625em solid #e7e7e7; /* 1px to em */
  }
  
  .footer-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .footer-logo,
  .footer-logo2 {
    width: 6.25em; /* 100px to em */
  }
  
  .footer-logo {
    margin-right: 0.625em; /* 10px to em */
  }
  
  .footer-logo2 {
    margin-right: 0.625em; /* 10px to em */
    margin-left: 0.625em; /* 10px to em */
  }
  
  .footer-content p {
    margin: 0; /* Remove default margin */
  }
  </style>
  