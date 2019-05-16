<template>
  <div class="newRecCard">
    <router-link tag="a" class="rlink" id="newrec" to="/newrec">
      <p id="plus">+</p>
      <p id="title">New List</p>
    </router-link> 
  </div>
</template>

<script>
export default {
  name: 'newRecCard'
}
</script>

<style scoped>
  .newRecCard {
    margin: 0;
    padding: 0;
    border: 0;
  }
  #newrec {
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

#plus {
  font-size: 3em;
  position: absolute;
  margin: 45px 0px 0px 100px;
}

#title {
  margin: 175px 0px 0px 0px;
}

</style>
