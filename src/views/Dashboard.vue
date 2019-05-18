<template>
  <div class="dashboard">
    <div class="topbar">
      <router-link tag="a" class="rlink" id="home" to="/">
        <img src="@/assets/logo_inverted.png"/>  
      </router-link>
      <h1 id="dashtitle">Dashboard</h1>
    </div>
    <div class="subtitle">
      <h2> Welcome, [User] </h2>
    </div>
    <newRecCard class = "newcard"/>
    <recCard class = "nextcard"/>

  <div id="box">
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import newRecCard from '@/components/newRecCard.vue'
import recCard from '@/components/recCard.vue'

export default {
  name: 'dashboard',
  components: {
    newRecCard,
    recCard
  },
  data() {
    return {
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
.dashboard {
  position: absolute;
  width: 100%;
  height: 100%;

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
  margin: 75px 0px 0px 10px;
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

#box {
  height: 10000px;
}

.newcard { /* temporary */   
  margin: 0px 0px 0px 325px;
}

.nextcard { /* temporary */ 
  margin: 0px 0px 0px 25px;
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