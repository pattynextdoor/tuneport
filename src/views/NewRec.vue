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
          <option v-for="playlist in playlists" v-bind:key="playlist.id">
            {{playlist.name}}
          </option>
        </select>
      </div>
      <div v-on:click="getTracksFromPlaylist" class="next">Next</div>
    </div>
    <div v-if="state == 'configuration'" class="configRec">
      <h2>Change the attributes up to your liking!</h2>
      <div class="slidecontainer">
        <label for="energy">Energy</label>
        <input type="range" orient="vertical" min="0" max="1" v-model="energy" step="0.05" class="slider" id="myRange" name="danceability">

        <label for="loudness">Loudness</label>
        <input type="range" orient="vertical" min="-60" max="0" v-model="loudness" class="slider" id="myRange" name="energy">

        <label for="danceability">Danceability</label>
        <input type="range" orient="vertical" min="0" max="1" v-model="danceability" step="0.05" class="slider" id="myRange" name="loudness">

        <label for="valence">Valence</label>
        <input type="range" orient="vertical" min="0" max="1" v-model="valence" step="0.05" class="slider" id="myRange" name="valence">

        <label for="tempo">Tempo</label>
        <input type="range" orient="vertical" min="1" max="250" v-model="tempo" class="slider" id="myRange" name="tempo">
      </div>
      <div v-on:click="createRecommendation" class="choice-btn">
        <p class="choice">Submit</p>
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
      selectedPlaylistId: "",
      songs:  [
        {title: 'song 1'},
      ],
      energy: 0.5,
      loudness: -30,
      danceability: 0.5,
      valence: 0.5,
      tempo: 200
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
              var i;
              for (i = 0; i < response.body.items.length; i++) {
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
      this.$data.state = "configuration";
      // First, we need the selected playlist's ID
      let playlists = this.$data.playlists;
      let selectedPlaylist = this.$data.selectedPlaylist;
      let token = this.$data.token;
      let playlistId = ""
      let vm = this;
      let tracks= [];

      for (let i = 0; i < playlists.length; i++) {
        if (playlists[i].name == selectedPlaylist) {
          playlistId = playlists[i].id;
          vm.$data.selectedPlaylistId = playlistId;
          break;          
        }
      }

      // Make a request to the endpoint to retrieve tracks
      let reqUrl = "https://api.spotify.com/v1/playlists/"
                    + playlistId + "/tracks";

      this.$http.get(reqUrl, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(function(response) {
        tracks = response.body.items
        vm.getTrackFeatures(tracks);
      })
    },
    getTrackFeatures: function(tracks) {
      let vm = this;
      let token = this.$data.token;
      // Get 5 random tracks from 'tracks'
      let reqStr = "";

      for (let i = 0; i < 5; i++) {
        let randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
        let randomTrackId = randomTrack.track.id;
        
        reqStr += randomTrackId;

        if (i != 4) {
          reqStr += ',';
        }
      }

      let reqUrl = "https://api.spotify.com/v1/audio-features/?ids=" + reqStr;

      this.$http.get(reqUrl, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(function(response) {
        let audioFeatures = response.body.audio_features;
        console.log(audioFeatures);
        vm.processFeatures(audioFeatures); 
      })
    },
    processFeatures: function(features) {
      // Features: Energy, Loudness, Danceability, Valence, Tempo
      let energySum = 0;
      let loudSum = 0;
      let danceSum = 0;
      let valenceSum = 0;
      let tempoSum = 0;

      for (let i = 0; i < features.length; i++) {
        energySum += features[i].energy;
        loudSum += features[i].loudness;
        danceSum += features[i].danceability;
        valenceSum += features[i].valence;
        tempoSum += features[i].tempo;
      }

      let energyAvg = energySum / features.length;
      let loudAvg = loudSum / features.length;
      let danceAvg = danceSum / features.length;
      let valenceAvg = valenceSum / features.length;
      let tempoAvg = tempoSum / features.length;
      
      this.$data.energy = energyAvg;
      this.$data.loudness = loudAvg;
      this.$data.danceability = danceAvg;
      this.$data.valence = valenceAvg;
      this.$data.tempo = tempoAvg;
    },
    createRecommendation: function() {
      let vm = this;
      // Save attributes to Firebase
      let userId = firebase.auth().currentUser.uid;
      let dbRef = firebase.database().ref().child(userId);

      dbRef.set(
        {
          recommendations: [
            {
              playlistId: vm.$data.selectedPlaylistId,
              energy: vm.$data.energy,
              loudness: vm.$data.loudness,
              danceability: vm.$data.danceability,
              valence: vm.$data.valence,
              tempo: vm.$data.tempo
            }
          ]
        }
      )
    }
  },
  mounted() {
    this.retrieveToken();
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
  text-align: right;
}
output {
  color: #000000;
}
</style>
