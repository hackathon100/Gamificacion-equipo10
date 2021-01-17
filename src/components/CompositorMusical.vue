<template>
  <div class="">
    <h1>Creacion Musical</h1>
    <div class="arreglo-musical">
      {{ this.arregloMusical }}
    </div>
    <div class="botones-instrumentos mx-auto">
      <b-container fluid class="">
        <b-row>
          <b-col>
            <img
              src="../assets/instrumentos/charango3final.png"
              class="img-fluid"
              alt="charango"
              v-on:click="agregarAgregloMusical('charango')"
            />
          </b-col>
          <b-col>
            <img
              src="../assets/instrumentos/bomboleguero1.png"
              class="img-fluid"
              alt="bombo"
              v-on:click="agregarAgregloMusical('bombo')"
            />
          </b-col>
          <b-col>
            <img
              src="../assets/instrumentos/quenafinal.png"
              class="img-fluid"
              alt="quena"
              v-on:click="agregarAgregloMusical('quena')"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="controles-sonido mt-5">
      <button>play</button>
      <button @click="$emit('close')">stop</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      mainProps: {
        width: 150,
        height: 150,
      },
    };
  },
  methods: {
    agregarAgregloMusical(instrumento) {
      console.log("apretado", instrumento);
      this.$store.dispatch("agregarAgregloMusical", instrumento);
      console.log("que tiene el arreglo", this.arregloMusical);
    },
  },
  computed: {
    ...mapState(["arregloMusical"]),
  },
};
</script>

<style></style>
