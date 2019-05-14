<template>
  <div class="newrec">
    <Navbar />
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

      <dropdown
        v-model="query"
        class="searchbar"
        :options="[
        {
          id: 1,
          name: 'Option 1'
        },
        {
          id: 2,
          name: 'Option 2'
        }
        ]"
        v-on:selected="validateSelection"
        v-on:filter="getDropdownValues"
        :disabled="false"
        name="song search"
        :maxItem="10"
        placeholder="Young KSB - Slob on My Ass"
      >
      </dropdown>

    </div>
    <div v-if="state == 'choosing playlist'" class="choosePlaylist">
      <h2>Choose a playlist to analyze the qualities of</h2>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'

export default {
  name: 'newrec',
  components: {
    Navbar
  },
  data() {
    return {
      state: "start",
      query: ""
    }
  },
  methods: {
    songButton: function() {
      this.state = "choosing song";
    },
    playlistButton: function() {
      this.state = "choosing playlist";
    }
  },
  watch: {
    query: function(val, oldVal) {
      
    }
  },
  mounted() {

  } 
}
</script>

<style scoped>
  .newrec {
    padding-bottom: 5%;  
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
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
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
