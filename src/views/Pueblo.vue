<template>
  <div class="container">
    <h1>
      oro<span class="badge bg-warning ">{{ oro }}</span>
    </h1>

    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <h3 slot="header">Mi header personalizado</h3>

      <h3 slot="body">audio</h3>
    </modal>

    <modal v-if="showModalCompositor" @close="showModalCompositor = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <div slot="header">
        <compositor-musical></compositor-musical>
      </div>
    </modal>

    <modal v-if="showModalTrivia" @close="showModalTrivia = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <div slot="header">
        <trivia-audio-npc></trivia-audio-npc>
      </div>
    </modal>

    <div class="row">
      <div class="col">
        <img
          src="https://www.turismodeobservacion.com/media/fotografias/norte-de-chile-cactus-y-flores-23684-xl.jpg"
          class="img-fluid"
          alt="..."
          v-on:click="ganaOro(10)"
        />
      </div>
      <div class="col">
        <img
          src="https://www.turismodeobservacion.com/media/fotografias/norte-de-chile-cactus-y-flores-23684-xl.jpg"
          class="img-fluid"
          alt="..."
          v-on:click="showModalCompositor = true"
        />
      </div>
      <div class="col">
        <img
          src="https://www.turismodeobservacion.com/media/fotografias/norte-de-chile-cactus-y-flores-23684-xl.jpg"
          class="img-fluid"
          alt="..."
          v-on:click="showModalTrivia = true"
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
import Modal from "../components/Modal";
import CompositorMusical from "../components/CompositorMusical";
import TriviaAudioNpc from "../components/TriviaAudioNpc";

export default {
  data() {
    return {
      showModal: false,
      showModalCompositor: false,
      showModalTrivia: false,
    };
  },
  components: { Modal, CompositorMusical, TriviaAudioNpc },
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
