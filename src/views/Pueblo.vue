<template>
  <div class="container">
    <h1>
      oro<span class="badge bg-warning ">{{ oro }}</span>
    </h1>
    <div class="row">
      <div class="col">
        <button v-on:click="ganaOro(10)">
          <img
            src="https://www.turismodeobservacion.com/media/fotografias/norte-de-chile-cactus-y-flores-23684-xl.jpg"
            class="img-fluid"
            alt="..."
          />
        </button>
      </div>
      <div class="col">
        <img
          src="https://www.turismodeobservacion.com/media/fotografias/norte-de-chile-cactus-y-flores-23684-xl.jpg"
          class="img-fluid"
          alt="..."
        />
      </div>
      <div class="col">
        <img
          src="https://www.turismodeobservacion.com/media/fotografias/norte-de-chile-cactus-y-flores-23684-xl.jpg"
          class="img-fluid"
          alt="..."
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img
          src="https://www.turismodeobservacion.com/media/fotografias/norte-de-chile-cactus-y-flores-23684-xl.jpg"
          class="img-fluid"
          alt="..."
        />
      </div>
      <div class="col">
        <img
          src="https://www.turismodeobservacion.com/media/fotografias/norte-de-chile-cactus-y-flores-23684-xl.jpg"
          class="img-fluid"
          alt="..."
        />
      </div>
      <div class="col">
        <img
          src="https://www.turismodeobservacion.com/media/fotografias/norte-de-chile-cactus-y-flores-23684-xl.jpg"
          class="img-fluid"
          alt="..."
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img
          src="https://www.turismodeobservacion.com/media/fotografias/norte-de-chile-cactus-y-flores-23684-xl.jpg"
          class="img-fluid"
          alt="..."
        />
      </div>
      <div class="col">
        <img
          src="https://www.turismodeobservacion.com/media/fotografias/norte-de-chile-cactus-y-flores-23684-xl.jpg"
          class="img-fluid"
          alt="..."
        />
      </div>
      <div class="col">
        <img
          src="https://www.turismodeobservacion.com/media/fotografias/norte-de-chile-cactus-y-flores-23684-xl.jpg"
          class="img-fluid"
          alt="..."
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img
          src="https://www.turismodeobservacion.com/media/fotografias/norte-de-chile-cactus-y-flores-23684-xl.jpg"
          class="img-fluid"
          alt="..."
        />
      </div>
      <div class="col">
        <img
          src="https://www.turismodeobservacion.com/media/fotografias/norte-de-chile-cactus-y-flores-23684-xl.jpg"
          class="img-fluid"
          alt="..."
        />
      </div>
      <div class="col">
        <img
          src="https://www.turismodeobservacion.com/media/fotografias/norte-de-chile-cactus-y-flores-23684-xl.jpg"
          class="img-fluid"
          alt="..."
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    ganaOro: function(oro) {
      alert("ahora tengo mas oro");
      let cantidadOro = oro;
      this.$store.dispatch("aumentarOro", cantidadOro);
    },
  },
  computed: {
    ...mapState(["oro"]),
  },
};
</script>

<style></style>
