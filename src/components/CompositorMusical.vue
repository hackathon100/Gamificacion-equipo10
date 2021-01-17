<template>
  <div class="">
    <h1>Compositor Musical</h1>
    <div class="arreglo-musical"></div>
    <div class="botones-instrumentos mx-auto">
      <b-container fluid class="p-4">
        <b-row>
          <b-col>
            <button>
              <b-img
                v-bind="mainProps"
                src="https://picsum.photos/250/250/?image=54"
                rounded="circle"
                alt="Circle image"
              >
              </b-img>
            </button>
          </b-col>
          <b-col>
            <button>
              <b-img
                v-bind="mainProps"
                src="https://picsum.photos/250/250/?image=54"
                rounded="circle"
                alt="Circle image"
              >
              </b-img>
            </button>
          </b-col>
          <b-col>
            <button>
              <b-img
                v-bind="mainProps"
                src="https://picsum.photos/250/250/?image=54"
                rounded="circle"
                alt="Circle image"
              >
              </b-img>
            </button>
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
};
</script>

<style>
.botones-instrumentos {
}
</style>
