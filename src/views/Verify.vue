<template>
  <div class="verify">
    <h1>Verifying...</h1> 
    <img src="@/assets/cubeloader.gif"/>
  </div>
</template>

<script>
import firebase from 'firebase'
import router from '@/router'

export default {
  name: 'verify',
  data() {
    return {
      token: '',
      email: '',
      id: ''
    }
  },
  methods: {
    parseToken: function() {
      let address = window.location.href;
      let token = address.substr(address.indexOf('=') + 1);
      token = token.substr(0, token.indexOf('&'));
      console.log(token);
      this.$data.token = token;
    },
    getEmailAndId: function() {
      let token = this.$data.token;
      
      let reqUrl = "https://api.spotify.com/v1/me";
      
      this.$http.get(reqUrl, 
      {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then(function(response) {
        this.$data.email = response.body.email;
        console.log(this.$data.email);
        this.$data.id = response.body.id;
        this.verifyUser();
      })
    },
    verifyUser: function() {
      console.log('Verifying user...');

      let email = this.$data.email;
      let id = this.$data.id;
      let token = this.$data.token;

      firebase.auth().createUserWithEmailAndPassword(email, id)
        .then(function(user) {
          console.log('User successfully created');
          router.push('dashboard');
        })
        .catch(function(err) {
          if (err.code == "auth/email-already-in-use") {
            console.log('Account already exists');

            firebase.auth().signInWithEmailAndPassword(email, id)
              .then(function(user) {
                console.log('Signing in to existing account...');
                var dbRefObj = firebase.database().ref().child(id);
                dbRefObj.set(
                  {
                    token: token 
                  }
                )
                router.push('dashboard');
              })
          }
        });
    }
  },
  mounted() {
    this.parseToken();
    this.getEmailAndId();
  } 
}
</script>

<style scoped>
h1 {
  color: #272727;
  font-size: 5em;
}

img {
  position: absolute;
  width: 100px;
  top: 4%;
  left: 425px;
}

</style>
