<template>
  <div class="home">
    <Navbar />
    <h1>TunePort</h1>  
    <p class="subtitle">Take Control of Your Music</p>
    <router-link id="link" tag="a" to="/register">Get Started</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'

export default {
  name: 'home',
  components: {
    Navbar
  },
  data() {
    return {

    }
  },
  methods: {
  
  },
  mounted() {
    
  }
}
</script>


<style>
/* Global styles */
body {
  margin: 0;
  background-color: #f3f2f2;
  color: rgb(17, 17, 17);
}
</style>

<style scoped>
.home {
  background-image: url("../assets/headphones.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

h1 {
  color: #000000;
  font-size: 8em;
  text-align: left;
  margin-left: 7%;
  margin-top: 7%;
  margin-bottom: 0;
}

p.subtitle {
  text-align: left;
  font-size: 3em;
  color: #4b4b4b;
  margin-top: 0;
  margin-left: 8%;
}

a {
  color: #d8d8d8;
  font-size: 1.2em;
}

#link {
  display: inline-block;
  width: 135px;
  margin-top: 0;
  margin-left: 8%;
  padding: 1% 3%;
  border-radius: 5px;
  background-color: #d8026e;
  color: #ffffff;
  font-size: 1.5em;
  text-align: center;
  text-decoration: none;
}
</style>