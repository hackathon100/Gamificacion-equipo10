<template>
  <div>
    <b-row>
      <h1>trivia audio</h1>
    </b-row>
    <b-row>
      <h3>
        Para mi pueblo es muy importante contar historias desde los mas grandes
        a los más chiquititos. Por eso somos muy buenos para las adivinanzas. A
        ver si puedes resolver esta: Me agradecen en celebraciones sin mi no
        podrían ser tan comilones me gusta el charango, la quena y la caja me
        llaman Madre Tierra y también_____________?
      </h3>
    </b-row>
    <b-row>
      <button>AUDIO PREGUNTA</button>
    </b-row>
    <b-row>
      <b-col>
        <b-img
          v-bind="mainProps"
          src="https://picsum.photos/250/250/?image=54"
          rounded="circle"
          alt="Circle image"
          v-on:click="RespuestaIncorrecta"
        >
        </b-img>
      </b-col>
      <b-col>
        <b-img
          v-bind="mainProps"
          src="https://picsum.photos/250/250/?image=54"
          rounded="circle"
          alt="Circle image"
          v-on:click="RespuestaIncorrecta"
        >
        </b-img>
      </b-col>
      <b-col>
        <b-img
          v-bind="mainProps"
          src="https://picsum.photos/250/250/?image=54"
          rounded="circle"
          alt="Circle image"
          v-on:click="RespuestaCorrecta"
          @click="$emit('close')"
        >
        </b-img>
      </b-col>
    </b-row></div
></template>

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
    RespuestaCorrecta() {
      alert("genial");
    },
    RespuestaIncorrecta() {
      alert("Vuelve a intentarlo");
    },
  },
};
</script>

<style></style>
