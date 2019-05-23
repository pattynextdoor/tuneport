<template>
  <div class="recCard">
    <router-link tag="a" class="rlink" id="rec" to="/listen"> <!-- add link to correct rec-->
      <div class="top">
      Link Goes to Homepage for now
      </div>
      <div class="bot">
        [Name for List]
      </div>
    </router-link> 
  </div>
</template>

<script>
export default {
  name: 'recCard'
}
</script>

<style scoped>
#rec {
  display: grid;
  border: 0;
  grid-template-rows: 60% 40%;
  margin: 0px 0px 0px 0px;
  padding: 0;
  height: 300px;
  width: 250px;
  background-color: #f8f8f8;
  text-decoration: none;
  color: #272727;
  font-size: 1.9em;
  word-wrap: inherit;
  text-align: center;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.bot {
  background-color: #d8026e;
  color: #e8e8e8;
}

#title {
  margin: 30px 0px 0px 0px;
}

</style>
