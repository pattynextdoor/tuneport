<template>
  <div class="recCard">
    <router-link tag="a" class="rlink" id="rec" to="/"> <!-- add link to correct rec-->
      <p id="title">Link Goes to Homepage for now </p>
      <p>[Name for List]</p>
    </router-link> 
  </div>
</template>

<script>
export default {
  name: 'recCard'
}
</script>

<style scoped>
  .recCard {
    margin: 0;
    padding: 0;
    border: 0;
  }
  #rec {
    margin: 0px 0px 0px 0px;
    padding: 0;
    height: 250px;
    width: 250px;
    border-radius: 50px;
    background-color: #272727;
    text-decoration: none;
    color: #d8d8d8;
    text-align: center;
    font-size: 1.9em;
    position: absolute;
    word-wrap: inherit;
    z-index: 0;
  }

#title {
  margin: 30px 0px 0px 0px;
}

</style>
