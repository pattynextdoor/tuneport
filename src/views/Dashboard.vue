<template>
  <div class="dashboard">
    <TuneNav/>
    <div class="subtitle">
      <h2> Welcome, {{ name }}<span id="user"></span></h2>
    </div>
    <div class="grid">
      <recCard v-for="card in cards" :key="card.id"> </recCard>
      <newRecCard />
    </div>
    <div class="background"/>
  </div>
</template>

<script>
// @ is an alias to /src
import newRecCard from '@/components/newRecCard.vue'
import recCard from '@/components/recCard.vue'
import TuneNav from '@/components/tunenav.vue'
import firebase from 'firebase'

export default {
  name: 'dashboard',
  components: {
    newRecCard,
    recCard,
    TuneNav
  },
  data() {
    return {
      token: "",
      name: "",
      cards: [
        {
          id: 1
        }
      ]
    }
  },
  methods: {
    getName: function() {
      let userId = firebase.auth().currentUser.uid;
      let dbRef = firebase.database().ref().child(userId);

      let vm = this;

      let tokenRef = dbRef.once('value')
                      .then(function(snapshot) {
                        vm.$data.token = snapshot.val().token;
                        let token = vm.$data.token;
                        let authString = 'Bearer ' + token;
                        let reqUrl = "https://api.spotify.com/v1/me"

                        vm.$http.get(reqUrl, 
                        {
                          headers: {
                            'Authorization': authString
                          }
                        })
                        .then(function(response) {
                          vm.$data.name = response.body.display_name.split(" ")[0];
                        })
                      });
    }
  },
  mounted() {
    this.getName();
  }
}
</script>

<style scoped>
.dashboard {
  width: 100%;
  height: 100%;
  background-image: url("../assets/headphones1.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
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

</style>