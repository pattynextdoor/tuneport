<template>
  <div class="dashboard">
    <div class="topbar">
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

.topbar {
  position: fixed;
  width: 98.3%;
  height: 50px;
  top: 1%;
  border-radius: 5px;
  background-color: #272727;
  text-align: left;
  text-indent: 10px;
  z-index: 3;
}

.subtitle {
  margin: 75px 0px 0px 10px;
  font-size: 2em;
  color: #d8d8d8;
}

h1 {
  position: absolute;
  margin: 5px 0px 0px 0px;
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
</style>