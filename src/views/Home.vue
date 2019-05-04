<template>
  <div class="home">
    <Navbar />
    <h1>TunePort</h1>  
    <img class = "tuneportlogo" src = "../assets/logo_inverted.png" />
    <img class = "animated" src = "../assets/audio.gif" />
    <img class = "backgroundimg" src = "../assets/audio.jpg" />
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
  color: #d8d8d8;
}

h1 {
  color: #d8d8d8;
}


</style>

<style scoped>

.backgroundimg{
  position: absolute;
  margin: 0px;
  padding: 0px;
  border: 0px;
  width: 107%;
  bottom: -60px;
  left: -40px;
  z-index: -2;
}

.animated {
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  left: 850px;
  top: 125px;
  z-index: -1;
}

h1 {
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  color: #d8d8d8;
  font-size: 6em;
  margin: 200px 0px 0px 250px;
}

p.subtitle {
  position: absolute;
  top: 37%;
  left: 14%;
  font-size: 1.5em;
  color: #d8d8d8;
}

.tuneportlogo {
  background-color: rgba(255, 255, 255, 0);
  position: absolute;
  top: 280px;
  left: 115px;
  margin: 0px;
  width: 125px;
}


.spotifylogo {
  background-color: rgba(255, 255, 255, 0);
}

a {
  color: #d8d8d8;
  font-size: 1.2em;
}

a.login-button {
  position: absolute;
  top: 50%;
  border: 1px solid white;
  color: #d8d8d8; 
  padding: 1%;
}

</style>