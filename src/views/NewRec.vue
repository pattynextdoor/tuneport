<template>
  <div class="newrec">
    <Navbar/>
    <h1>Creating a New Recommendation System</h1>
    <div v-if="state == 'start'" class="start">
      <h2>Get started with a song? Or with a playlist?</h2>
      <div class="grid">
        <div class="left">
          <div v-on:click="songButton" class="choice-btn">
            <p class="choice">Song</p>
          </div>
        </div>
        <div class="right">
          <div v-on:click="playlistButton" class="choice-btn">
            <p class="choice">Playlist</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="state == 'choosing song'" class="chooseSong">
      <h2>Search for a song to analyze the qualities of</h2>
    </div>
    <div v-if="state == 'choosing playlist'" class="choosePlaylist">
      <h2>Choose a playlist to analyze the qualities of</h2>
    </div>
  </div>
</template>



<script>
import Navbar from '@/components/navbar.vue'
import firebase from 'firebase'

export default {
  name: 'newrec',
  components: {
    Navbar
  },
  data() {
    return {
      state: "start",
      query: "",
      token: ""
    }
  },
  methods: {
    retrieveToken: function() {
      let userId = firebase.auth().currentUser.uid;
      let saving = 2;
      let dbRef = firebase.database().ref().child(userId);

      let token = ""

      let vm = this;

      let tokenRef = dbRef.once('value')
                    .then(function(snapshot) {
                      token = snapshot.val().token;
                      vm.$data.token = token;
                    }).then(function(){
                      let token = vm.$data.token;
                      let reqUrl = "https://api.spotify.com/v1/me/playlists?limit=10&offset=5";
                      vm.$http.get(reqUrl, 
                      {
                        headers: {
                          'Authorization': 'Bearer ' + token
                        }
                      })
                      .then(function(response) {
                        console.log(JSON.stringify(response))
                      })
                      });
    },
    songButton: function() {
      this.$data.state = "choosing song";
    },
    playlistButton: function() {
      this.$data.state = "choosing playlist";
    },
    getPlayList: function(){
      let token = this.$data.token;
      console.log(token)
      let authString = 'Bearer ' + token; 
      console.log(authString)
      let reqUrl = "https://api.spotify.com/v1/me/playlists?limit=10&offset=5";
      this.$http.get(reqUrl, 
      {
        headers: {
          'Authorization': authString
        }
      })
      .then(function(response) {
        console.log(response)
      })
    }
  },
  mounted() {
    this.retrieveToken();
  } 
}
</script>

<style scoped>
.newrec {
  padding-bottom: 5%;
  background-color: white;
}

h1 {
  text-align: center;
}

h2 {
  text-align: center;
  margin-bottom: 15%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
}

.choice-btn {
  display: inline-block;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  background-color: #d8026e;
  color: #d8d8d8;
  border-radius: 20px;
  padding: 5px 50px;
  max-width: 300px;
  cursor: pointer;
}

.choice {
  font-size: 1.75em;
}

.searchbar .dropdown-input {
  display: block;
  margin: 0 auto;
  font-size: 3em;
  border: none;
  border-bottom: 3px solid #d8026e;
  color: #d8d8d8;
  background-color: transparent;
}
</style>
