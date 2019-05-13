<template>


<v-data-table hide-actions :headers="headers6" :items="desserts6" class="elevation-1">
            <template v-slot:items="props6">
              <td>{{ props6.item.name }}</td>

              <td class="text-xs-center">{{ props6.item.rebanhoRecriaCabecasInicial }}</td>
              <td class="text-xs-center">{{ props6.item.rebanhoRecriaCabecasFinal }}</td>
            </template>
          </v-data-table>
    
</template>
<script>import Formulario from "../../class/Formulario.js";
import BibliotecaDeCalculos from "bibliotecadecalculos";
export default {


data: () => ({
    formulario: "",

    headers6: [
      {
        text: "Rebanho de Recria/ Engorda",
        align: "left",
        sortable: false,
        value: "name"
      },

      {
        text: "Cabeças Inicial",
        value: "rebanhoRecriaCabecasInicial",
        align: "center"
      },

      {
        text: "Cabeças Final",
        value: "rebanhoRecriaCabecasFinal",
        align: "center"
      }
    ],
    desserts6: [
      {
        name: "SUBTOTAL",

        rebanhoRecriaCabecasInicial: "erro",

        rebanhoRecriaCabecasFinal: "erro"
      }
    ],


}),

beforeCreate() {
    var db = new Dexie("simulacao");
    db.version(1).stores({
      simulacao: "id,formularioDB"
    });

    db.simulacao
      .get(1)
      .then(f => (this.formulario = new Formulario(f.formularioDB)))
      .then(function(form) {
        console.log(form);
        console.log(form.RebanhoDeRecria);

        var bibliotecas = [
          BibliotecaDeCalculos.RebanhoDeReproducao(form.RebanhoDeReproducao),

          BibliotecaDeCalculos.RebanhoDeRecria(form.RebanhoDeRecria),

          BibliotecaDeCalculos.RebanhoTotal(
            BibliotecaDeCalculos.RebanhoDeReproducao(form.RebanhoDeReproducao),
            BibliotecaDeCalculos.RebanhoDeRecria(form.RebanhoDeRecria)
          )
        ];

        return bibliotecas;
      })
      .then(
        g => (
         
          (this.desserts6[0].rebanhoRecriaCabecasInicial = g[1].subtotalDeCabecasInicial()),
          (this.desserts6[0].rebanhoRecriaCabecasFinal = g[1].subtotalDeCabecasFinal())
        )
      );
}
    
}
</script>
<style scoped>


@media screen and (max-width: 991px) {
  

  .elevation-1 {
    margin-top: 3%;
    border: solid;
    margin-left: 1%;
    margin-right: 1%;
    border-width: 1px;
    border-color: #004f48;
  }

  
}

@media screen and (min-width: 992px) {
 
  .elevation-1 {
    margin-top: 3%;
    border: solid;
    margin-left: 2%;
    margin-right: 2%;
    border-width: 1px;

    border-color: #004f48;
  }
}

</style>
