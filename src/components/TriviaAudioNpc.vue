<template>
  <div>
    <b-row>
      <h1>Trivia</h1>
    </b-row>
    <b-row> </b-row>
    <b-row>
      <Button @click="play">PLAY</Button>
    </b-row>
    <b-row>
      <b-col>
        <img
          src="../assets/trivia/cactus.png"
          class="img-fluid"
          alt="suri"
          v-on:click="RespuestaIncorrecta"
        />
      </b-col>
      <b-col>
        <img
          src="../assets/trivia/yareta.jpg"
          class="img-fluid"
          alt="suri"
          v-on:click="RespuestaIncorrecta"
        />
      </b-col>
      <b-col>
        <img
          src="../assets/trivia/pachamama.jpg"
          class="img-fluid"
          alt="suri"
          v-on:click="RespuestaCorrecta"
          @click="$emit('close')"
        />
      </b-col>
    </b-row></div
></template>

<script>
//import LocucionTrivia from "../assets/locuciones/6.LocucionHackathon-Niñatrivia.mp3";
//import useSound from "vue-use-sound";
//import { ref } from "vue";
import useSound from "vue-use-sound";
import buttonSfx from "../assets/locuciones/6.LocucionHackathon-Niñatrivia.mp3";

export default {
  setup() {
    const [play] = useSound(buttonSfx);
    return {
      play,
    };
  },
  data() {
    return {
      mainProps: {
        width: 150,
        height: 150,
      },
    };
  },
  methods: {
    RespuestaCorrecta() {
      alert("Felicitaciones tu respuesta es correcta");
    },
    RespuestaIncorrecta() {
      alert("De los errores se aprende");
    },
    handleClick() {
      alert("reproducir sonido");
    },
  },
};
</script>

<style></style>
