<template>
  <div id="app">
    <NavBar></NavBar>

    <router-view />
  </div>
</template>
<script>
import firebase from "firebase";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",

  components: {
    NavBar,
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;

        console.log(uid);
        this.$store.dispatch("dataUser", user);
      } else {
        this.$store.dispatch("dataUser", null);
        console.log("cierre final");
      }
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}


</style>
