<template>
  <div class="listen">
    <TuneNav/>
    <div class="container">
      <div class="left">
        <div class="album">
          [Put Album Image Here]
        </div>
        <button class="prev"/>
        <button class="play"/>
        <button class="next"/>
        <button class="heart"/>
      </div>
      <div class="right">
        <div class="right-top">
          <div class="playlist">
            <p>[Playlist Name]</p>
          </div>
        </div>
        <div class="right-mid">
          <ul id="liked-songs">
            <li v-for="song in songs" v-bind:key="song">
              {{song.title}}
            </li>
          </ul>
        </div>
        <div class="right-bot">
          <p> Export Playlist? </p>
          <button> Yes, please! </button>
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
  margin: 150px auto;
  position: relative;
  background-color: #ffffff;
  text-align: center;
  color: #000000;
}
.container {
  display: grid;
  grid-template-columns: 75% 25%;
  height: 100%;
}
.right {
  display: grid;
  grid-template-rows: 6vh 80vh 9vh;
  color: #e8e8e8;
}
.right-top {
  font-size: 2em;
  text-align: center;
  background-color: #d8026e;
  width: fill;
}
.right-mid {
  margin: 0;
  height: 80vh;
  background-color: #e8e8e8;
  overflow-y: scroll;
}
.right-bot {
  margin: 0;
  width: fill;
  background-color: #d8026e;
}
ul {
  margin-top: 0;
  list-style: none;
  color: #272727;
  line-height: 40px;
  background-color: #E7ECF0;
}
p {
  margin-top: 10px;
}
/* button {
  background-color: rgba(0,0,0,0);
} */
.prev {
  background-image: url("../assets/icons8-rewind-50.png");
}
.next {
  background-image: url("../assets/icons8-fast-forward-50.png");
}
.play {
  background-image: url("../assets/icons8-circled-play-50.png");
}
.heart {
  background-image: url("../assets/like.png");
}

</style>