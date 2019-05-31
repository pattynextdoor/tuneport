<template>
  <div class="listen">
    <TuneNav/>
    <div class="container">
      <div class="left">
        <div class="album">
          [Put Album Image Here]
        </div>
        <div class="playback">
          <button class="prev"/>
          <button class="play"/>
          <button class="next"/>
          <button class="heart"/>
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
            <li v-for="song in songs" v-bind:key="song">
              {{song.title}}
            </li>
          </ul>
        </div>
        <div class="mid-bot">
        </div>
      </div>
      <div class="right">
        <div class="mid-top">
          <div class="playlist">
            <p>[Playlist Name]</p>
          </div>
        </div>
        <div class="mid-mid">
          <ul id="liked-songs">
            <li v-for="liked in likes" v-bind:key="liked">
              {{song.title}}
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

export default {
  name: 'listen',
  components: {
      TuneNav
  },
  data() {
    return {
      songs: [
        {title: 'song1'},
        {title: 'song2'},
        {title: 'song3'},
        {title: 'song4'},
        {title: 'song5'},
        {title: 'song1'},
        {title: 'song2'},
        {title: 'song3'},
        {title: 'song4'},
        {title: 'song5'},
        {title: 'song1'},
        {title: 'song2'},
        {title: 'song3'},
        {title: 'song4'},
        {title: 'song5'},
        {title: 'song1'},
        {title: 'song2'},
        {title: 'song3'},
        {title: 'song4'},
        {title: 'song5'},
        {title: 'song1'},
        {title: 'song2'},
        {title: 'song3'},
        {title: 'song4'},
        {title: 'song5'},
        {title: 'song1'},
        {title: 'song2'},
        {title: 'song3'},
        {title: 'song4'},
        {title: 'song5'}
      ],
      liked: [
      ]
    }
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
  background-color: #ffffff;
  text-align: center;
  color: #000000;
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