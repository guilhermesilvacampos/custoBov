<template>

<v-data-table hide-actions :headers="headers7" :items="desserts7" class="elevation-1">
            <template v-slot:items="props7">
              <td>{{ props7.item.name }}</td>
              <td class="text-xs-center">{{ props7.item.rebanhoTotalCabecasInicial }}</td>
              <td class="text-xs-center">{{ props7.item.rebanhoTotalCabecasFinal }}</td>
              <td class="text-xs-center">{{ props7.item.rebanhoTotalPesoVivoInicial }}</td>
              <td class="text-xs-center">{{ props7.item.rebanhoTotalPesoVivoFinal }}</td>
              <td class="text-xs-center">{{ props7.item.rebanhoTotalValorEstoqueGadoInicial }}</td>
              <td class="text-xs-center">{{ props7.item.rebanhoTotalValorEstoqueGadoFinal }}</td>
            </template>
          </v-data-table>
    
</template>

<script>
import Formulario from "../../class/Formulario.js";
import BibliotecaDeCalculos from "bibliotecadecalculos";
export default {


data: () => ({
    formulario: "",
headers7: [
      {
        text: "Rebanho Total",
        align: "left",
        sortable: false,
        value: "name"
      },
      {
        text: "Cabeças Inicial",
        value: "rebanhoTotalCabecasInicial",
        align: "center"
      },

      {
        text: "Cabeças Final",
        value: "rebanhoTotalCabecasFinal",
        align: "center"
      },
      {
        text: "Peso vivo total do rebanho(kg) Inicial",
        value: "rebanhoTotalPesoVivoInicial",
        align: "center"
      },
      {
        text: "Peso vivo total do rebanho(kg) Final",
        value: "rebanhoTotalPesoVivoFinal",
        align: "center"
      },

      {
        text: "Valor estoque gado (R$) Inicial",
        value: "rebanhoTotalValorEstoqueGadoInicial",
        align: "center"
      },

      {
        text: "Valor estoque gado (R$) Final",
        value: "rebanhoTotalValorEstoqueGadoFinal",
        align: "center"
      }
    ],
    desserts7: [
      {
        name: "TOTAL",
        rebanhoTotalCabecasInicial: "erro",
        rebanhoTotalCabecasFinal: "erro",
        rebanhoTotalPesoVivoInicial: "erro",
        rebanhoTotalPesoVivoFinal: "erro",
        rebanhoTotalValorEstoqueGadoInicial: "erro",
        rebanhoTotalValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Diferença no Estoque Total de Gado(Final-Inicial)",

        rebanhoTotalCabecasFinal: "erro",
        rebanhoTotalPesoVivoFinal: "erro",
        rebanhoTotalValorEstoqueGadoFinal: "erro"
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

        

         
         

        return BibliotecaDeCalculos.RebanhoTotal(
            BibliotecaDeCalculos.RebanhoDeReproducao(form.RebanhoDeReproducao),
            BibliotecaDeCalculos.RebanhoDeRecria(form.RebanhoDeRecria));
      })
      .then(
        g => (
         
         
          //rebanho Total

          (this.desserts7[0].rebanhoTotalCabecasInicial = g.totalCabecaInicial()),
          (this.desserts7[0].rebanhoTotalCabecasFinal = g.totalCabecaFinal()),
          (this.desserts7[0].rebanhoTotalPesoVivoInicial = g.totalPesoVivoInicialDoRebanho()),
          (this.desserts7[0].rebanhoTotalPesoVivoFinal = g.totalPesoVivoFinalDoRebanho()),
          (this.desserts7[0].rebanhoTotalValorEstoqueGadoInicial = g.totalValorEstoqueInicial()),
          (this.desserts7[0].rebanhoTotalValorEstoqueGadoFinal = g.totalValorEstoqueFinal()),
          (this.desserts7[1].rebanhoTotalCabecasFinal = g.diferencaDeCabecasEstoqueTotal()),
          (this.desserts7[1].rebanhoTotalPesoVivoFinal = g.diferencaPesovivoTotal()),
          (this.desserts7[1].rebanhoTotalValorEstoqueGadoFinal = g.diferencaValorTotal())
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
