<template>
  <div class="nav">
    <div class="links">
      <router-link tag="a" class="rlink" to="/">Home</router-link> |
      <router-link tag="a" class="rlink" to="/login">Login</router-link> | 
      <router-link tag="a" class="rlink" to="/register">Register</router-link> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  .nav {
    margin: 0;
    padding: 0;
    height: 50px;
    border-radius: 5px;
    background-color: #272727;
    text-align: center;
  }
  
  .links {
    padding-top: 10px;
  }

  .rlink {
    color: #d8d8d8;
    text-decoration: none;
  }

</style>
