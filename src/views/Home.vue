<template>
  <div class="home">
    <font-awesome-icon icon="headphones" class="fa-5x"/>
      <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <img class = "spotifylogo" src = "../assets/Spotify_Icon_RGB_Green.png" />
      <button v-bind:href="authLink">Login to Spotify</button>
    </div>
    <h1>TunePort</h1>  
      <img class = "tuneportlogo" src = "../assets/logo_inverted.png" />
      <img class = "animated" src = "../assets/audio.gif" />
      <img class = "backgroundimg" src = "../assets/audio.jpg" />
    <p>Take Control of Your Music</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style>

* {
  background-color:#000000;
  padding: 0px;
  margin: 0px;
  border: 0px;
}

.backgroundimg{
  position: absolute;
  margin: 0px;
  padding: 0px;
  border: 0px;
  width: 104%;
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

#nav {
  height: 50px;
  background-color: #272727;
  text-align: right;
}

#nav button {
  position: absolute;
  right: 10px;
  margin: 5px 0px 0px 0px;
  font-size: 20px;
  color: #bbbbbb;
  background-color: #101010;
  padding: 7px;
}

#nav img {
  position: absolute;
  right: 175px;
  height: 40px;
  margin: 5px 0px 0px 0px;
}

h1 {
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  color: #d8d8d8;
  font-size: 125px;
  margin: 200px 0px 0px 250px;
}

p {
  background-color: rgba(255, 255, 255, 0);
  position: absolute;
  top: 380px;
  color: #d8d8d8d8;
  font-size: 35px;
  margin: 0px 0px 0px 280px;
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

</style>