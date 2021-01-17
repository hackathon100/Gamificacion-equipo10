<template>
  <div class="">
    <h1>Compositor Musical</h1>
    <div class="arreglo-musical">
      {arregloMusical}
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
              v-on:click="agreglarAgregoMusical('instrumento 1')"
            >
            </b-img>
          </b-col>
          <b-col>
            <b-img
              v-bind="mainProps"
              src="https://picsum.photos/250/250/?image=54"
              rounded="circle"
              alt="Circle image"
              v-on:click="agreglarAgregoMusical('instrumento 2')"
            >
            </b-img>
          </b-col>
          <b-col>
            <b-img
              v-bind="mainProps"
              src="https://picsum.photos/250/250/?image=54"
              rounded="circle"
              alt="Circle image"
              v-on:click="agreglarAgregoMusical('instrumento 3')"
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
    agreglarAgregoMusical(boton) {
      console.log("apretado", boton);
      this.$store.dispatch("aumentarOro", cantidadOro);
    },
  },
};
</script>

<style>
.botones-instrumentos {
}
</style>
