<template>
  <v-inicial>
    <v-container class="container">
      <v-content>
        <h1>Está Pronto Para Fazer Sua Simulação?</h1>
        <v-form class="form">
          <input-inicial/>
          <botao-inicial/>
        </v-form>
      </v-content>
    </v-container>
  </v-inicial>
</template>
<script>
import InputMenuInicial from "../components/input/InputMenuInicial.vue";
import BotaoMenuInicial from "../components/button/BotaoMenuInicial.vue";
export default {
  name: "inicial",
  components: {
    "input-inicial": InputMenuInicial,
    "botao-inicial": BotaoMenuInicial
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style scoped>
.container {
  text-align: center;
  align-items: center;
  background-color: #00695c;
  margin-top: 8%;
  margin-left: 20%;
  max-width: 60%;
  color: azure;
  width: auto;
  box-shadow: 0 0 5px black;
}
</style>
