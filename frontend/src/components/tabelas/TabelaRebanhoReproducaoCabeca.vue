<template>

<v-data-table hide-actions :headers="headers5" :items="desserts5" class="elevation-1">
            <template v-slot:items="props5">
              <td>{{ props5.item.name }}</td>

              <td class="text-xs-center">{{ props5.item.rebanhoReproducaoCabecasInicial }}</td>
              <td class="text-xs-center">{{ props5.item.rebanhoReproducaoCabecasFinal }}</td>
            </template>
          </v-data-table>
    
</template>
<script>
import Formulario from "../../class/Formulario.js"; 
import BibliotecaDeCalculos from "bibliotecadecalculos";
export default {
data: () => ({
    formulario: "",

    headers5: [
      {
        text: "Rebanho de Reprodução",
        align: "left",
        sortable: false,
        value: "name"
      },

      {
        text: "Cabeças Inicial",
        value: "rebanhoReproducaoCabecasInicial",
        align: "center"
      },

      {
        text: "Cabeças Final",
        value: "rebanhoReproducaoCabecasFinal",
        align: "center"
      }
    ],
    desserts5: [
      {
        name: "SUBTOTAL",

        rebanhoReproducaoCabecasInicial: "erro",

        rebanhoReproducaoCabecasFinal: "erro"
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
        


        return BibliotecaDeCalculos.RebanhoDeReproducao(form.RebanhoDeReproducao);
      })
      .then(
        g => (
          //reprodução

         
          (this.desserts5[0].rebanhoReproducaoCabecasInicial = g.subtotalDeCabecasInicial()),
          (this.desserts5[0].rebanhoReproducaoCabecasFinal = g.subtotalDeCabecasFinal())
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
