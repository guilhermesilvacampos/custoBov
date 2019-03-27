<template>
<v-inputmenuinicial >
    <v-container class="form">
    <v-flex xs12 sm12 md12>
            
          <v-text-field 
          background-color="white"
            label="Ano"
            box 
            v-model="ano"
          ></v-text-field>


        </v-flex>

        <v-flex xs12 sm12 md12>
          <v-text-field
          background-color="white"
            label="Fazenda"
            box
            v-model="fazenda"
          ></v-text-field>
          </v-flex>

          <v-flex xs12 sm12 md12>
          <v-text-field
          background-color="white"
            label="Município"
            box
            v-model="municipio"
          ></v-text-field>
        </v-flex>
        {{ano}}
    </v-container>
</v-inputmenuinicial>

</template>
<script>
export default {
    name: "input-menu-inicial",
    data () {
    return {
      ano:"",
      fazenda:"",
      municipio:""
    }
  }
}
</script>
<style scoped>
.form{
    margin-top: 5%;
}
</style>


