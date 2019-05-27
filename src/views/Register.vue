<template>
  <div class="register">
    <Navbar class="navbar"/>
    <div class="container">
      <div class="left"></div>
      <div class="right">
        <h1>Register for an account</h1>
        <p class="text">Glad that you're joining us!</p>
        <p class="text">Tuneport is a great way to be able to take control of how your Spotify recommendations are generated.</p>
        <p class="text">Tuneport uses recommendations from your Spotify account to function. A Spotify account is required to use Tuneport.</p>
        <a class="spotify-link" v-bind:href="authLink"><i class="fab fa-spotify"></i> Log in with Spotify</a>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'

export default {
  name: 'register',
  components: {
    Navbar
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
                    + '&redirect_uri=' + encodeURIComponent('http://localhost:8080/verify');
      console.log(postUrl);
      this.$data.authLink = postUrl;  
    },
    getInfo: function() {
      
    }
  },
  mounted() {
    this.getToken();
    this.getInfo();
  }
}
</script>

<style scoped>
body{
  background-color: #f5f8fa;
}

h1 {
  font-size: 2em;
}

.left {
  background-image: url("../assets/marshmellow.jpg");
  background-position: center;
  background-size: cover;
}

.right {
  padding-left: 10%;
  padding-right: 5%;
  background-color: #EBF1F3;
  color: #272727;
  border-top: 2px solid #1dbab4;
}

p.text {
  color: #272727;
}

.container {
  display: grid;
  width: 700px;
  height: 500px;
  margin: 12% auto;
  grid-template-columns: 40% 60%;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

a.spotify-link {
  display: inline-block;
  margin-left: 40%;
  margin-top: 10%;
  color: #ffffff;
  background-color: #1DB954;
  border-radius: 5px;
  padding: 2% 4%;
  text-decoration: none;
}

</style>
