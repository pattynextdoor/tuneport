<template>
  <div class="nav">
    <div class="links">
      <router-link tag="a" class="rlink" id="home" to="/">
        <img src="@/assets/logo_inverted.png"/>  
      </router-link>
      <a class="spotify-link" v-bind:href="authLink"><i class="fab fa-spotify"></i> Log in with Spotify</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
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
  .nav {
    margin: 0;
    padding: 0;
    height: 50px;
    /*border-radius: 5px;*/
    background-color: #272727;
    text-align: center;
  }
  
  .spotify-link{
    color: #ffffff;
    text-decoration: none;
    position:absolute;
    right: 20px;
    top: 10px;
    height: 40px;
    font-size: 1.4em;
    display: block;
  }
  #home {
    color: #ffffff;
    text-decoration: none;
    position:absolute;
    left:20px;;
  }

  img {
    width: 40px;
    position: absolute;
    top: 10px;
  }

</style>
