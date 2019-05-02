<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> | 
      <router-link to="/register">Register</router-link> 
      <!-- <img class = "spotifylogo" src = "../assets/Spotify_Icon_RGB_Green.png" /> -->
    </div>
    <h1>TunePort</h1>  
      <img class = "tuneportlogo" src = "../assets/logo_inverted.png" />
      <img class = "animated" src = "../assets/audio.gif" />
      <img class = "backgroundimg" src = "../assets/audio.jpg" />
    <p class="subtitle">Take Control of Your Music</p>
    <a class="login-button" v-bind:href="authLink"><i class="fab fa-spotify"></i> Log in to Spotify</a>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      authLink: ""
    }
  },
  methods: {
    getToken: function() {
      let tokenCode = this.$data.tokenCode;
      let clientId = '7616d568b9dc48e99f6a3776c6847315';
      let clientSecret = 'faf2d2f3f2c8441eb3ae8c9bf4a89265';
      let encoded = btoa(clientId + ':' + clientSecret);
      let scopes = encodeURIComponent('playlist-modify-public playlist-modify-private user-modify-playback-state user-top-read user-read-recently-played user-read-private user-read-email user-read-birthdate');
      let postUrl = 'https://accounts.spotify.com/authorize'
                    + '?client_id=' + clientId
                    // + '?client_secret=' + clientSecret
                    + '&response_type=' + 'token'
                    // + '?grant_type=' + 'authorization_code'
                    // + '?code=' + tokenCode
                    + '&scope=' + scopes
                    + '&redirect_uri=' + encodeURIComponent('http://localhost:8080/main');
      console.log(postUrl);
      this.$data.authLink = postUrl;  
    }
  },
  mounted() {
    this.getToken();
  }
}
</script>


<style>
/* Global styles */
body {
  background-color: #121212;
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