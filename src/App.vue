<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Signika');
html {
  height: 100%;
}
body {
  height: 100%;
}
#app {
  font-family: 'Signika', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 1px;
  color: #d8d8d8;
  background-color: rgba(0,0,0,0);
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
