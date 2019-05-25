<template>
  <div class="tunenav">
    <div class="links">
      <router-link tag="a" class="rlink" id="home" to="/">
        <img src="@/assets/logo_inverted.png"/>  
        <p>TunePort</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TuneNav',
  data() {
  }
}
</script>

<style scoped>
  .tunenav {
    margin: 0;
    padding: 0;
    height: 50px;
    width: 100%;
    background-color: #272727;
    text-align: center;
  }
  p {
    position: absolute;
    margin: 0;
    padding-top: 5px;
    text-align: left;
    left: 50px;
    font-size: 2em;
    color: #d8d8d8;
  }
  #home {
    color: #d8d8d8;
    text-decoration: none;
    position:absolute;
    left:20px;;
  }
  img {
    width: 40px;
    position: absolute;
    top: 10px;
  }

</style>
