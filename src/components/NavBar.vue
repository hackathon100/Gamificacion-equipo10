<template>
  <div>
    <b-navbar toggleable="xl" type="dark" variant="danger">
      <b-navbar-brand href="#">HACKATOON2021</b-navbar-brand>
      <div></div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'Login' }">Inicio</b-nav-item>
          
          
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="enviandoUser">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em> Hola : {{enviandoUser.displayName}}</em>
            </template>
            <b-dropdown-item
              :to="{ name: 'Administracion' }"
              @click="singOut"
              :disabled="existeUser"
              >Cerrar Sesion</b-dropdown-item
            >
            <b-dropdown-item :disabled="existeUser" >Puntajes</b-dropdown-item>
            <b-dropdown-item :disabled="existeUser" >Mis Logros</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from 'firebase';
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["enviandoUser"]),

    existeUser() {
      return !this.enviandoUser.uid.length > 0;
    },
  },
  methods: {

    singOut() {
      firebase
        .auth()
        .signOut()
        .then( () => {
          console.log("cerro la sesion");
          this.$router.push({name: 'Login'});
        })
        .catch( (error) => {
          console.error(error);
        });
    },
  }, // An error happened.
};
</script>

<style lang="scss" scoped>
</style>