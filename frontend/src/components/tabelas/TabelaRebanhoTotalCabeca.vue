<template>

<v-data-table hide-actions :headers="headers10" :items="desserts10" class="elevation-1">
            <template v-slot:items="props10">
              <td>{{ props10.item.name }}</td>
              <td class="text-xs-center">{{ props10.item.totalRebanhoMedioCabecas }}</td>

              <td class="text-xs-center">{{ props10.item.totalRebanhoMedioUA }}</td>
            </template>
          </v-data-table>
    
</template>

<script>
import Formulario from "../../class/Formulario.js";
import BibliotecaDeCalculos from "bibliotecadecalculos";
export default {


data: () => ({
    formulario: "",

     headers10: [
      {
        text: "Rebanho Total",
        align: "left",
        sortable: false,
        value: "name"
      },
      {
        text: "TOTAL DO REBANHO (MÉDIO) EM CABEÇAS",
        value: "totalRebanhoMedioCabecas",
        align: "center"
      },

      {
        text: "TOTAL DO REBANHO (MÉDIO) EM UA",
        value: "totalRebanhoMedioUA",
        align: "center"
      }
    ],
    desserts10: [
      {
        name: "",

        totalRebanhoMedioCabecas: "erro",

        totalRebanhoMedioUA: "erro"
      }
    ]
  


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

        

          
        

        return BibliotecaDeCalculos.RebanhoTotal(
            BibliotecaDeCalculos.RebanhoDeReproducao(form.RebanhoDeReproducao),
            BibliotecaDeCalculos.RebanhoDeRecria(form.RebanhoDeRecria)
          );
      })
      .then(
        g => (
         
         
          //rebanho Total

          
          (this.desserts10[0].totalRebanhoMedioCabecas = g.rebanhoTotalMedia()),
          (this.desserts10[0].totalRebanhoMedioUA = g.calculaRebanhoTotalUA())
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
