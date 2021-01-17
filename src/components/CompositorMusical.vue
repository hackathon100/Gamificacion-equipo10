<template>
  <div class="">
    <h1>Creacion Musical</h1>
    <div class="arreglo-musical">
      {{ this.arregloMusical }}
    </div>
    <div class="botones-instrumentos mx-auto">
      <b-container fluid class="p-4">
        <b-row>
          <b-col>
            <b-img
              v-bind="mainProps"
              src="https://picsum.photos/250/250/?image=54"
              rounded="circle"
              alt="Circle image"
              v-on:click="agregarAgregloMusical('instrumento 1')"
            >
            </b-img>
          </b-col>
          <b-col>
            <b-img
              v-bind="mainProps"
              src="https://picsum.photos/250/250/?image=54"
              rounded="circle"
              alt="Circle image"
              v-on:click="agregarAgregloMusical('instrumento 2')"
            >
            </b-img>
          </b-col>
          <b-col>
            <b-img
              v-bind="mainProps"
              src="https://picsum.photos/250/250/?image=54"
              rounded="circle"
              alt="Circle image"
              v-on:click="agregarAgregloMusical('instrumento 3')"
            >
            </b-img>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="controles-sonido mt-5">
      <button>play</button>
      <button>stop</button>
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
