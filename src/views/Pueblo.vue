<template>
  <div class="container">
    <h1>
      oro<span class="badge bg-warning ml-4 ">{{ oro }}</span>
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
      <button type="submit" @click="play">
      <img
          src="../assets/abuelo.png"
          class="img-fluid"
          alt="abuelo-aymara"
          v-on:click="showModalCompositor = true"
        />

      </button>

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
        />
      </div>
      <div class="col">
        <img
          src="../assets/cactus.png"
          class="img-fluid"
          alt="cactus"
        />
      </div>
      <div class="col">
        <img
          src="../assets/vicuna.png"
          class="img-fluid"
          alt="vicuna"
        />
      </div>
    </div>
    <div class="row">



    </div>
    <div class="row">



    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Modal from "../components/Modal";
import CompositorMusical from "../components/CompositorMusical";
import TriviaAudioNpc from "../components/TriviaAudioNpc";
import useSound from 'vue-use-sound';
import buttonSfx from '../assets/musicaguitarra.mp3';

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

  setup(){
    const [play] = useSound(buttonSfx)
     return{

      play,
    }
  },


};
</script>

<style>

</style>
