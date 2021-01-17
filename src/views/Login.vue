<template>
  <div class="">
    <b-container class="my-5">
      <h1 class="">Bienvenido</h1>

      <b-row>
        <b-col><img alt="Vue logo" src="../assets/logo.png" /></b-col>
        <b-col class="my-5 text-center">
          <b-form
            @submit.prevent="loginUser"
          >
         

            <b-button type="submit" class=" boton" pill variant="success" lg="4" >Ingresar con tu cuenta GMAIL</b-button>
          </b-form></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";

export default {
  name: "Login",

  data() {
    return {
      

    
    };
  },
  methods: {
    loginUser() {
      
        var provider = new firebase.auth.GoogleAuthProvider();
        
        firebase
          .auth()
          .signInWithPopup(provider)
          .then( (result) =>{
           
            var user = result.user;

            console.log(user);
            console.log("login realizado");
            // ...
            this.$router.push({name: 'Pueblo'});
          })
          
          .catch((error) => {
            // Handle Errors here.
            console.log(error.code);
            console.log(error.message);
            console.log(error.email);
            console.log(error.credential);
          });
    
    },
    
  },
  components: {},

  computed: {
  
  },
};
</script>
<style >
 .boton{

  text-align: center;
 }
</style>
