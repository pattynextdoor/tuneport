<template>
  <div class="dashboard">
    <TuneNav/>
    <div class="subtitle">
      <h2> Welcome, [User]<span id="user"></span></h2>
    </div>
    <div class="grid">
      <recCard v-for="card in cards" :key="card.id"> </recCard>
      <newRecCard />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import newRecCard from '@/components/newRecCard.vue'
import recCard from '@/components/recCard.vue'
import TuneNav from '@/components/tunenav.vue'

export default {
  name: 'dashboard',
  components: {
    newRecCard,
    recCard,
    TuneNav
  },
  data() {
    return {
      cards: [
        {
          id: 1
        }
      ]
    }
  },
  methods: {
    getEmail: function() {

    } 
  },
  mounted() {
  }
}
</script>

<style scoped>
.grid {
  margin-left: 20px;
  margin-right: 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto;
}
.topbar {
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0%;
  background-color: #272727;
  text-align: center;
  z-index: 3;
}
.subtitle {
  margin: 2% 2% auto;
  font-size: 2em;
  color: #272727;
}
h1 {
  margin-top:5px;
}
h1 > #dashtitle{
  position: absolute;
  margin: 0px 0px 0px 0px;
  padding: 0;
}

h2 {
  margin: 0px 0px 50px 0px;
}
img {
  width: 40px;
  position: absolute;
  top: 10px;
  color: #d8d8d8;
  text-decoration: none;
  position:absolute;
  left:20px;;
}
</style>