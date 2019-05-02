<template>
  <div class="register">
    <div class="container">
      <div class="left"></div>
      <div class="right">
        <h1>Register for an account</h1>
        <p class="text">Tuneport uses recommendations from your Spotify account to function. A Spotify account is required to use Tuneport.</p>
        <a class="spotify-link" v-bind:href="authLink"><i class="fab fa-spotify"></i> Log in to Spotify</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
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
                    + '&redirect_uri=' + encodeURIComponent('http://localhost:8080');
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

<style >
h1 {
  font-size: 2em;
}

.left {
  background-image: url('https://images.pexels.com/photos/1690081/pexels-photo-1690081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-position: center;
  background-size: cover;
  border-top-left-radius: 5%;
  border-bottom-left-radius: 5%;
}

.right {
  padding-left: 10%;
  padding-right: 5%;
  background-color:  #151616; 
  border-top-right-radius: 5%;
  border-bottom-right-radius: 5%;
}

p.text {
  color: #e8f0ee;
}

.container {
  display: grid;
  width: 700px;
  height: 500px;
  margin: 12% auto;
  border-radius: 5%;
  grid-template-columns: 40% 60%;
}

a.spotify-link {
  color:  #d8d8d8;
  background-color: #1ed760;
  border-radius: 5px;
  padding: 2% 4%;
  text-decoration: none;
}

</style>
