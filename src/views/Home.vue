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
      <img class = "backgroundimg" src = "../assets/audio.gif" />
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
  background-color: black;
  padding: 0px;
  margin: 0px;
  border: 0px;
}

.backgroundimg {
  block-size: 100%;
  width: 100%;
  margin: 275px 0px 0px 0px;
  z-index: -1;
}

.tuneportlogo {
  position: absolute;
  left: 0px;
  width: 150px;
  margin: 250px 0px 0px 80px;
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
  color: #d8d8d8;
  font-size: 125px;
  margin: 200px 0px 0px 250px;
}

p {
  position: absolute;
  color: #d8d8d8d8;
  font-size: 35px;
  margin: 330px 0px 0px 280px;
}

.tuneportlogo {
  position: absolute;
  top: 280px;
  left: 115px;
  margin: 0px;
  width: 125px;
}

.backgroundimg {
  position: absolute;
  top: 0px;
  left: 0px;
}

.spotifylogo {
  background-color: #272727;
}

</style>