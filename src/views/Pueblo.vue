<template>
  <div class="container">
    <h1>
      oro<span class="badge bg-warning ml-4 ">{{ oro }}</span>
    </h1>
    <div class="row my-5 mb-4">
      <div class="col">
        <button v-on:click="ganaOro(10)">
          <img
            src="../assets/suri.png"
            class="img-fluid"
            alt="suri"
          />
        </button>
      </div>
      <div class="col">
      <button type="submit" @click="play">
      <img
          src="../assets/abuelo.png"
          class="img-fluid"
          alt="abuelo-aymara"
        />
      
      </button>
        
      </div>
      <div class="col">
        <img
          src="../assets/yareta.jpg"
          class="img-fluid"
          alt="pachamama"
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
import useSound from 'vue-use-sound';
import buttonSfx from '../assets/musicaguitarra.mp3';
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
