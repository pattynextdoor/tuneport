<template>
  <div class="home">
    <Navbar />
    <div class="grid">
      <div class="left">
        <h1>TunePort</h1>  
        <p class="subtitle">Take Control of Your Music</p>
        <router-link id="link" tag="a" to="/register">Get Started</router-link>
      </div>
      <div class="right">
        <img class = "backgroundimg" src = "https://i.imgur.com/8pu6BWD.png" />
      </div>
    </div>
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
  background-color: #f3f2f2;
  color: rgb(17, 17, 17);
}
</style>

<style scoped>

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.backgroundimg{
  display: block;
  margin: 0 auto;
  margin-top: 10%;
  width: 75%;
  z-index: -2;
}

h1 {
  color: #000000;
  font-size: 7em;
  text-align: center;
  margin-top: 20%;
  margin-bottom: 0;
}

p.subtitle {
  text-align: center;
  font-size: 2em;
  color: #4b4b4b;
  margin-top: 0;
}

.spotifylogo {
  background-color: rgba(255, 255, 255, 0);
}

a {
  color: #d8d8d8;
  font-size: 1.2em;
}

.left {
  text-align: center;
}

#link {
  display: inline-block;
  width: 15%;
  margin: 0 auto;
  padding: 1% 3%;
  border-radius: 5px;
  background-color: #1dbab4/*#7CDBD5*/;
  color: #ffffff;
  font-size: 1.5em;
  text-align: center;
  text-decoration: none;
}
</style>