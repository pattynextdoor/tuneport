<template>
  <div class="home">
    <Navbar />
    <h1>TunePort</h1>  
      <router-link id="link" tag="a" to="/register">Get Started</router-link>
    <img class = "backgroundimg" src = "../assets/headphones.jpg" />
    <p class="subtitle">Take Control of Your Music</p>
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
  background-color: #EBF1F3;/* #2c3e50;*/
  color: #d8d8d8;
}

h1 {
  color: #d8d8d8;
}


</style>

<style scoped>

.backgroundimg{
  position: absolute;
  max-width: 140%;
  top: 0px;
  left: -15%;
  height: auto;
  z-index: -2;
}

h1 {
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  color: #000000;
  font-size: 7em;
  position: absolute;
  top: 22%;
  left: 150px;
}

p.subtitle {
  position: absolute;
  top: 37%;
  left: 165px;
  font-size: 3em;
  color: #000000;
}

.spotifylogo {
  background-color: rgba(255, 255, 255, 0);
}

a {
  color: #d8d8d8;
  font-size: 1.2em;
}

#link {
  position: absolute;
  height: 40px;
  width: 215px;
  top: 450px;
  left: 165px;
  border-radius: 5px;
  background-color: #1dbab4/*#7CDBD5*/;
  color: #ffffff;
  font-size: 2em;
  text-align: center;
  text-decoration: none;
}
</style>