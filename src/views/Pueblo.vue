<template>
  <div class="container">
    <h1>
      Oro<span class="badge bg-warning ml-4 ">{{ oro }}</span>
    </h1>

    <modal v-if="showModalCompositor" @close="showModalCompositor = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <div slot="header">
        <compositor-musical></compositor-musical>
      </div>
      <div name="footer">
        Listo para Guardar?
        <button
          class="modal-default-button"
          @click="showModalCompositor = false"
        >
          Guardar
        </button>
      </div>
    </modal>

    <modal v-if="showModalTrivia" @close="showModalTrivia = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <div slot="header">
        <trivia-audio-npc @close="showModalTrivia = false"></trivia-audio-npc>
      </div>
    </modal>

    <div class="row my-5 mb-4">
      <div class="col">
        <img
          src="../assets/suri.png"
          class="img-fluid"
          alt="suri"
          v-on:click="ganaOro(10)"
        />
      </div>
      <div class="col">
        <img
          src="../assets/abuelo.png"
          class="img-fluid"
          alt="abuelo-aymara"
          v-on:click="showModalCompositor = true"
        />
      </div>
      <div class="col">
        <img
          src="../assets/yareta.jpg"
          class="img-fluid"
          alt="pachamama"
          v-on:click="showModalTrivia = true"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img
          src="../assets/ninaaymara.png"
          class="img-fluid"
          alt="nina-aymara"
          @click="play"
        />
      </div>
      <div class="col">
        <img src="../assets/cactus.png" class="img-fluid" alt="cactus" />
      </div>
      <div class="col">
        <img src="../assets/vicuna.png" class="img-fluid" alt="vicuna" />
      </div>
    </div>
    <div class="row"></div>
    <div class="row"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Modal from "../components/Modal";
import CompositorMusical from "../components/CompositorMusical";
import TriviaAudioNpc from "../components/TriviaAudioNpc";
import useSound from "vue-use-sound";
import buttonSfx from "../assets/musicaguitarra.mp3";

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
      let cantidadOro = oro;
      this.$store.dispatch("aumentarOro", cantidadOro);
    },
  },
  computed: {
    ...mapState(["oro"]),
  },

  setup() {
    const [play] = useSound(buttonSfx);
    return {
      play,
    };
  },
};
</script>

<style></style>
