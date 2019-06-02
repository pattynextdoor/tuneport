<template>
  <div class="listen">
    <TuneNav/>
    <div class="container">
      <div class="left">
        <div class="album">
          <img v-bind:src="tracklist[currTrackPos].albumArt.url" class="albumArt">
        </div>
        <p class="trackInfo">
          {{tracklist[currTrackPos].artist.name}} - {{tracklist[currTrackPos].title}}
        </p>
        <div class="playback">
          <button class="prev" v-on:click="fastBackward"/>
          <a v-bind:href="tracklist[currTrackPos].permalink">
            <button class="play"></button>
          </a>
          <button class="next" v-on:click="fastForward"/>
          <button class="heart"v-on:click="likeTrack"/>
        </div>
      </div>
      <div class="mid">
        <div class="mid-top">
          <div class="playlist">
            <p>Queue</p>
          </div>
        </div>
        <div class="mid-mid">
          <ul id="liked-songs">
            <li v-for="track in tracklist" v-bind:key="track.permalink" class="tracklist">
              {{track.artist.name}} - {{track.title}}
            </li>
          </ul>
        </div>
        <div class="mid-bot">
        </div>
      </div>
      <div class="right">
        <div class="mid-top">
          <div class="playlist">
            <p>Liked Songs</p>
          </div>
        </div>
        <div class="mid-mid">
          <ul id="liked-songs">
            <li v-for="track in liked" v-bind:key="track.permalink" class="tracklist">
              {{track.artist.name}} - {{track.title}}
            </li>
            </li>
          </ul>
        </div>
        <div class="mid-bot">
          <p> Export Playlist? </p>
          <button class="export"> Yes, please! </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TuneNav from '@/components/tunenav.vue'
import firebase from 'firebase'

export default {
  name: 'listen',
  components: {
      TuneNav
  },
  data() {
    return {
      token: "",
      userRecObj: {},
      recommendedTracksObj: {},
      tracklist: [],
      liked: [],
      currTrackPos: 0,
    }
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
      let tokenRef = dbRef
        .once("value")
        .then(function(snapshot) {
          token = snapshot.val().token;
          vm.$data.token = token;
        })
        .then(function() {
          vm.retrieveRecommendations();
        })
    },
    retrieveRecommendations: function() {
      let vm = this;
      let token = this.$data.token;

      // Retrieve user recommendation data from Firebase
      let userId = firebase.auth().currentUser.uid;
      let dbRef = firebase.database().ref().child(userId);

      let recRef = dbRef.once('value')
                    .then(function(snapshot) {
                      let recObject = snapshot.val().recommendations[0];
                      vm.$data.userRecObj = recObject;
                      console.log(vm.$data.userRecObj);
                    })
                    .then(function() {
                      // Make the call to the recommendations endpoint
                      let reqUrl = "https://api.spotify.com/v1/recommendations"
                      vm.$http.get(reqUrl, {
                        params: {
                          seed_tracks: vm.$data.userRecObj.trackSeedStr,
                          target_energy: vm.$data.userRecObj.energy,
                          target_loudness: vm.$data.userRecObj.loudness,
                          target_danceability: vm.$data.userRecObj.target_danceability,
                          target_valence: vm.$data.userRecObj.target_valence,
                          target_tempo: vm.$data.userRecObj.target_tempo
                        },
                        headers: {
                          Authorization: "Bearer " + vm.$data.token
                        }
                      })
                      .then(function(response) {
                        let recommendedTracks = response.body.tracks;
                        console.log(recommendedTracks);
                        vm.$data.recommendedTracksObj = recommendedTracks;
                        vm.getTrackInfo();
                      })
                    })
    },
    getTrackInfo: function() {
      let vm = this;
      let token = this.$data.token;
      let tracklist = [];
      let recTracksObj = this.$data.recommendedTracksObj;

      for (let i = 0; i < recTracksObj.length; i++) {
        let currTrack = {
          title: recTracksObj[i].name,
          artist: recTracksObj[i].artists[0],
          albumArt: recTracksObj[i].album.images[0],
          permalink: recTracksObj[i].external_urls.spotify
        }
        tracklist.push(currTrack);
      }

      this.$data.tracklist = tracklist;
    },
    fastBackward: function() {
      if (this.$data.currTrackPos > 0) {
        this.$data.currTrackPos -= 1;
      }
    },
    fastForward: function() {
      if (this.$data.currTrackPos < this.$data.tracklist.length - 1) {
        this.$data.currTrackPos += 1;
      }
    },
    likeTrack: function() {
      this.$data.liked.push(this.$data.tracklist[this.$data.currTrackPos]);      
    }
  },
  mounted() {
    this.retrieveToken();
  }
}
</script>

<style scoped>
.listen {
  height: 100%;
}
.album {
  height: 400px;
  width: 400px;
  display: block;
  margin: 150px auto 150px;
  margin-bottom: 10%;
  text-align: center;
  color: #000000;
  border-radius: 5%;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.container {
  display: grid;
  grid-template-columns: 60% 20% 20%;
  height: fill;
}
.mid {
  display: grid;
  grid-template-rows: 6vh 80vh 9vh;
  color: #ffffff;
}
.right {
  display: grid;
  grid-template-rows: 6vh 80vh 9vh;
  color: #ffffff;
}
.mid-top {
  font-size: 2em;
  text-align: center;
  background-color: #bd005e;
  width: fill;
}
.right > .mid-top {
  background-color: #d8026e;
}
.mid-mid {
  margin: 0;
  height: 80vh;
  overflow-y: scroll;
  background-color: #ffffff;
}
.mid-bot {
  margin: 0;
  width: fill;
  background-color: #bd005e;
}
.right > .mid-bot {
  background-color: #d8026e;;
}
ul {
  margin-top: 0;
  padding: 0;
  list-style: none;
  color: #272727;
  line-height: 40px;
  background-color: #ffffff;
}
p {
  margin-top: 10px;
}
.playback {
  text-align: center;
}
.prev {
  display: inline-block;
  margin: 0 30px 30px auto;
  height: 50px;
  width: 50px;
  background-color: transparent;
  border: 0px;
  background-image: url("../assets/icons8-rewind-50.png");
  cursor: pointer;
}
.next {
  display: inline-block;
  margin: 0 30px 30px auto;
  height: 50px;
  width: 50px;
  background-color: transparent;
  border: 0px;
  background-image: url("../assets/icons8-fast-forward-50.png");
  cursor: pointer;
}
.play {
  display: inline-block;
  margin: 0 30px 30px auto;
  height: 50px;
  width: 50px;
  background-color: transparent;
  border: 0px;
  background-image: url("../assets/icons8-circled-play-50.png");
  cursor: pointer;
}

.tracklist:nth-child(even){
  background-color: #d3d3d3;
}

.tracklist {
  text-align: center;
}

.albumArt {
  width: 100%;
  border-radius: 5%;
}

.trackInfo {
  text-align: center;
  margin-bottom: 10%;
  font-size: 1.5em;
  color: black;
}

.heart {
  position: absolute;
  margin-top: 15px;
  margin-left: 50px;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border: 0px;
  background-image: url("../assets/like.png");
  background-repeat: no-repeat;
  cursor: pointer;
}

</style>