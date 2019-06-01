<template>
  <div class="newrec">
    <TuneNav/>
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
    <div v-if="state == 'choosing song' || state == 'choosing playlist'">
      <div v-if="state == 'choosing song'" class="chooseSong">
        <h2>Search for a song to analyze the qualities of</h2>
        <select id = "songList">
          <option v-for="song in songs" v-bind:key="song">
            {{song.title}}
          </option>
        </select>
      </div>
      <div v-if="state == 'choosing playlist'" class="choosePlaylist">
        <h2>Choose a playlist to analyze the qualities of</h2>
        <select id = "playlist" v-model="selectedPlaylist">
          <option v-for="playlist in playlists" v-bind:key="playlist">
            {{playlist.name}}
          </option>
        </select>
      </div>
      <div v-on:click="configButton" class="next">Next</div>
    </div>
    <div v-if="state == 'configuration'" class="configRec">
      <h2>Change the attributes up to your liking!</h2>
      <div class="slidecontainer">
        <label for="key">Key</label>
        <label for="mode">Mode</label>
        <label for="timesig">Time Sig</label>
        <label for="acousticness">Acousticness</label>
        <label for="danceability">Danceability</label>
        <label for="energy">Energy</label>
        <label for="instrumentalness">Instrumentalness</label>
        <label for="liveliness">Liveliness</label>
        <label for="loudness">Loudness</label>
        <label for="speechiness">Speechiness</label>
        <label for="valence">Valence</label>
        <label for="tempo">Tempo</label>
        <input type="range" orient="vertical" min="1" max="100" value="50" class="slider" id="key" oninput="keyUpdate(value)">
        <input type="range" orient="vertical" min="1" max="100" value="50" class="slider" id="mode">
        <input type="range" orient="vertical" min="1" max="100" value="50" class="slider" id="myRange" name="timesig">
        <input type="range" orient="vertical" min="1" max="100" value="50" class="slider" id="myRange" name="acousticness">
        <input type="range" orient="vertical" min="1" max="100" value="50" class="slider" id="myRange" name="danceability">
        <input type="range" orient="vertical" min="1" max="100" value="50" class="slider" id="myRange" name="energy">
        <input type="range" orient="vertical" min="1" max="100" value="50" class="slider" id="myRange" name="instrumentalness">
        <input type="range" orient="vertical" min="1" max="100" value="50" class="slider" id="myRange" name="liveliness">
        <input type="range" orient="vertical" min="1" max="100" value="50" class="slider" id="myRange" name="loudness">
        <input type="range" orient="vertical" min="1" max="100" value="50" class="slider" id="myRange" name="speechiness">
        <input type="range" orient="vertical" min="1" max="100" value="50" class="slider" id="myRange" name="valence">
        <input type="range" orient="vertical" min="1" max="100" value="50" class="slider" id="myRange" name="tempo">
      </div>
    </div>
  </div>
</template>

<script>
import TuneNav from '@/components/tunenav.vue'
import firebase from 'firebase'

export default {
  name: 'newrec',
  components: {
    TuneNav
  },
  data() {
    return {
      state: "start",
      query: "",
      token: "",
      playlists: [
        {title: 'list 1'},
      ],
      selectedPlaylist: "",
      songs:  [
        {title: 'song 1'},
      ]
    };
  },
  methods: {
    retrieveToken: function() {
      let userId = firebase.auth().currentUser.uid;
      let dbRef = firebase
        .database()
        .ref()
        .child(userId);
      let token = "";
      let vm = this;
      let playlists;
      let playlistName;
      let playlistList = [];
      let playlistId;
      let tokenRef = dbRef
        .once("value")
        .then(function(snapshot) {
          token = snapshot.val().token;
          vm.$data.token = token;
        })
        .then(function() {
          let token = vm.$data.token;
          let reqUrl =
            "https://api.spotify.com/v1/me/playlists?limit=10&offset=5";
          vm.$http
            .get(reqUrl, {
              headers: {
                Authorization: "Bearer " + token
              }
            })
            .then(function(response) {
              // vm.$data.playlists = response;
              var i;
              for (i = 0; i < 5; i++) {
                playlistName = response.body.items[i]["name"];
                playlistId = response.body.items[i]["id"];
                let currPlaylist = {
                  name: playlistName,
                  id: playlistId
                }
                playlistList.push(currPlaylist);
              }
              console.log(playlistList);
              vm.$data.playlists = playlistList;
            });
        });
    },
    songButton: function() {
      this.$data.state = "choosing song";
    },
    playlistButton: function() {
      this.$data.state = "choosing playlist";
    },
    getTracksFromPlaylist: function() {

    },
    configButton: function() {
      this.$data.state = "configuration";
    }
  },
  mounted() {
    this.retrieveToken();
    // this.getPlayList();
  }
};
</script>

<style scoped>
.newrec {
  background-image: url("../assets/headphones1.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

h1 {
  text-align: center;
  color: #000000;
  margin-top: 5%;
  font-size: 4em;
}

h2 {
  color: #000000;
  text-align: center;
  margin-bottom: 5%;
  font-size: 3em;
}

.configRec > h2{
  margin-bottom: 5%;
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
  color: #ffffff;
  border-radius: 20px;
  padding: 5px 50px;
  max-width: 300px;
  cursor: pointer;
}

.choice {
  font-size: 1.75em;
}

/* .searchbar .dropdown-input {
  display: block;
  margin: 0 auto;
  font-size: 3em;
  border: none;
  border-bottom: 3px solid #d8026e;
  color: #000000;
  background-color: transparent;
} */
select {
  display: block;
  margin: 0 auto;
  width: 350px;
  height: 35px;
  font-size: 1em;
  margin-bottom: 150px;
  border: none;
  border-bottom: 3px solid #d8026e;
  color: #000000;
  background-color: #ffffff;
}
.next {
  display: block;
  margin: 0 auto;
  height: 35px;
  width: 100px;
  background-color:#d8026e;
  border: 0;
  color: #ffffff;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  font-size: 1.5em;
  cursor: pointer;
  text-align: center;
  padding: 5px 5px 5px 5px;
}
.slidecontainer {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  margin-left: 25px;
  margin-right: 30px;
}
.slider {
  height: 150%;
  width: 3px;
  border-radius: 5px;
  margin: 30px auto;
}
.slider:hover {
  opacity: 1;
}
.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%; 
  background: #d8026e;
  cursor: pointer;

}
label {
  color: #000000;
  font-size: 1em;
  text-align: center;
}
output {
  color: #000000;
}
</style>
