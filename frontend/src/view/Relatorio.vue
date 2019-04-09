<template>
  <v-container grid-list-md text-xs-center>
    <v-content>
      <h1>Relatórios</h1>
      <br>
      <v-expansion-panel v-model="panel[0]" expand class="panel">
        <v-expansion-panel-content>
          <template v-slot:header>
            <h2>Dados Gerais do Rebanho</h2>
          </template>

          <div class="divider">
            <span>
              <b>Rebanho de Reprodução</b>
            </span>
          </div>
          <v-divider></v-divider>

          <v-data-table hide-actions :headers="headers" :items="desserts" class="elevation-1">
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-center">{{ props.item.rebanhoReproducaoPesoVivoInicial }}</td>
              
              <td class="text-xs-center">{{ props.item.rebanhoReproducaoValorEstoqueGadoInicial }}</td>
              
              
            </template>
          </v-data-table>


           <v-data-table hide-actions :headers="headers1" :items="desserts1" class="elevation-1">
            <template v-slot:items="props1">
              <td>{{ props1.item.name }}</td>
            
              <td class="text-xs-center">{{ props1.item.rebanhoReproducaoPesoVivoFinal }}</td>
              <td class="text-xs-center">{{ props1.item.rebanhoReproducaoValorEstoqueGadoFinal }}</td>
              
            </template>
          </v-data-table>

          <v-data-table hide-actions :headers="headers5" :items="desserts5" class="elevation-1">
            <template v-slot:items="props5">
              <td>{{ props5.item.name }}</td>
            
              <td class="text-xs-center">{{ props5.item.rebanhoReproducaoCabecasInicial }}</td>
              <td class="text-xs-center">{{ props5.item.rebanhoReproducaoCabecasFinal }}</td>
              
            </template>
          </v-data-table>

          <div class="divider">
            <span>
              <b>Rebanho de Recria/Engorda</b>
            </span>
          </div>
          <v-divider></v-divider>



          <v-data-table hide-actions :headers="headers2" :items="desserts2" class="elevation-1">
            <template v-slot:items="props2">
              <td>{{ props2.item.name }}</td>
              <td class="text-xs-center">{{ props2.item.rebanhoRecriaPesoPorCabecaMedia }}</td>
              
              
              
              
            </template>
          </v-data-table>


          <v-data-table hide-actions :headers="headers3" :items="desserts3" class="elevation-1">
            <template v-slot:items="props3">
              <td>{{ props3.item.name }}</td>
            
              <td class="text-xs-center">{{ props3.item.rebanhoRecriaPesoVivoInicial }}</td>
              <td class="text-xs-center">{{ props3.item.rebanhoRecriaValorEstoqueGadoInicial }}</td>
              
            </template>
          </v-data-table>



          <v-data-table hide-actions :headers="headers4" :items="desserts4" class="elevation-1">
            <template v-slot:items="props4">
              <td>{{ props4.item.name }}</td>
            
              <td class="text-xs-center">{{ props4.item.rebanhoRecriaPesoVivoFinal }}</td>
              <td class="text-xs-center">{{ props4.item.rebanhoRecriaValorEstoqueGadoFinal }}</td>
              
            </template>
          </v-data-table>

          <v-data-table hide-actions :headers="headers6" :items="desserts6" class="elevation-1">
            <template v-slot:items="props6">
              <td>{{ props6.item.name }}</td>
            
              <td class="text-xs-center">{{ props6.item.rebanhoRecriaCabecasInicial }}</td>
              <td class="text-xs-center">{{ props6.item.rebanhoRecriaCabecasFinal }}</td>
              
            </template>
          </v-data-table>



          <div class="divider">
            <span>
              <b>Rebanho Total</b>
            </span>
          </div>
          <v-divider></v-divider>



          <v-data-table hide-actions :headers="headers7" :items="desserts7" class="elevation-1">
            <template v-slot:items="props7">
              <td>{{ props7.item.name }}</td>
            
              
              <td class="text-xs-center">{{ props7.item.rebanhoTotalCabecasFinal }}</td>
              
            </template>
          </v-data-table>

          <v-data-table hide-actions :headers="headers8" :items="desserts8" class="elevation-1">
            <template v-slot:items="props8">
              <td>{{ props8.item.name }}</td>
              <td class="text-xs-center">{{ props8.item.rebanhoTotalPesoVivoInicial }}</td>
              
              <td class="text-xs-center">{{ props8.item.rebanhoTotalValorEstoqueGadoInicial }}</td>
              
              
            </template>
          </v-data-table>

          <v-data-table hide-actions :headers="headers9" :items="desserts9" class="elevation-1">
            <template v-slot:items="props9">
              <td>{{ props9.item.name }}</td>
              <td class="text-xs-center">{{ props9.item.rebanhoTotalPesoVivoFinal }}</td>
              
              <td class="text-xs-center">{{ props9.item.rebanhoTotalValorEstoqueGadoFinal }}</td>
              
              
            </template>
          </v-data-table>


          <v-data-table hide-actions :headers="headers10" :items="desserts10" class="elevation-1">
            <template v-slot:items="props10">
              <td>{{ props10.item.name }}</td>
              <td class="text-xs-center">{{ props10.item.totalRebanhoMedioCabecas }}</td>
              
              <td class="text-xs-center">{{ props10.item.totalRebanhoMedioUA }}</td>
              
              
            </template>
          </v-data-table>



          <v-btn href="/#/"
                class="button"
                color="success"
              >Visualizar Formulário ! </v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-content>
  </v-container>
</template>
<script>
import Formulario from "../class/Formulario.js";
export default {
  data: () => ({
    formulario: new Formulario(),
    panel: [0, 0],
    headers: [
          {
            text: 'Rebanho de Reprodução',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Peso vivo total do rebanho(kg) Inicial', value: 'rebanhoReproducaoPesoVivoInicial' ,align:'center',},
          
          { text: 'Valor estoque gado (R$) Inicial', value: 'rebanhoReproducaoValorEstoqueGadoInicial' ,align:'center'},
          
        ],
        desserts: [
          {
            
            name: 'Touros',
            rebanhoReproducaoPesoVivoInicial: 159,
            
            rebanhoReproducaoValorEstoqueGadoInicial: 24,
            
            
          },
          {
            name: 'Vacas (Matrizes)',
            rebanhoReproducaoPesoVivoInicial: 237,
            
            rebanhoReproducaoValorEstoqueGadoInicial: 37,
            
            
          },
          
          
        ],



        headers1: [
          {
            text: 'Rebanho de Reprodução',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          
          { text: 'Peso vivo total do rebanho(kg) Final', value: 'rebanhoReproducaoPesoVivoFinal' ,align:'center'},
         
          { text: 'Valor estoque gado(R$) Final', value: 'rebanhoReproducaoValorEstoqueGadoFinal',align:'center' },
          
        ],
        desserts1: [
          {
            name: 'Touros',
            
            rebanhoReproducaoPesoVivoFinal: 6.0,
            
            rebanhoReproducaoValorEstoqueGadoFinal: 4.0,
            
          },
          {
            name: 'Vacas (Matrizes)',
            
            rebanhoReproducaoPesoVivoFinal: 9.0,
            
            rebanhoReproducaoValorEstoqueGadoFinal: 4.3,
            
          },
          {
            name: 'Diferença no Estoque e Valor Do Gado de Cria (final-inicial)',
            
            rebanhoReproducaoPesoVivoFinal: 16.0,
            
            rebanhoReproducaoValorEstoqueGadoFinal: 6.0,
            
          },
          
        ],
        headers5: [
          {
            text: 'Rebanho de Reprodução',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          
          { text: 'Cabeças Inicial', value: 'rebanhoReproducaoCabecasInicial' ,align:'center'},
         
          { text: 'Cabeças Final', value: 'rebanhoReproducaoCabecasFinal',align:'center' },
          
        ],
        desserts5: [
          {
            name: 'SUBTOTAL',
            
            rebanhoReproducaoCabecasInicial: 6.0,
            
            rebanhoReproducaoCabecasFinal: 4.0,
            
          },
        ],

        headers2: [
          {
            text: 'Rebanho de Recria/Engorda',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Peso por cabeça(kg) Média', value: 'rebanhoRecriaPesoPorCabecaMedia' ,align:'center',},
          
          
          
        ],
        desserts2: [
          {
            
            name: 'Fêmeas + 36 meses',
            rebanhoRecriaPesoPorCabecaMedia: 159,
            
            
          },
          {
            name: 'Fêmeas 24-36 meses',
            rebanhoRecriaPesoPorCabecaMedia: 237,
            
            
          },
          {
            name: 'Fêmeas 12-24 meses ',
            rebanhoRecriaPesoPorCabecaMedia: 237,
           
            
          },
          {
            name: 'Fêmeas 0-12 meses',
            rebanhoRecriaPesoPorCabecaMedia: 237,
           
            
          },
          {
            name: 'Machos 0-12 meses',
            rebanhoRecriaPesoPorCabecaMedia: 237,
            
            
          },
          {
            name: 'Machos 12-24 meses ',
            rebanhoRecriaPesoPorCabecaMedia: 237,
            
            
          },
          {
            name: 'Machos 24-36 meses',
            rebanhoRecriaPesoPorCabecaMedia: 237,
           
            
          },
          {
            name: 'Machos + 36 meses inclusive tourunos ',
            rebanhoRecriaPesoPorCabecaMedia: 237,
            
            
          },
          
          
        ],
        headers3: [
          {
            text: 'Rebanho de Recria/Engorda',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Peso vivo total do rebanho(kg) Inicial', value: 'rebanhoRecriaPesoVivoInicial' ,align:'center',},
          
          { text: 'Valor estoque gado (R$) Inicial', value: 'rebanhoRecriaValorEstoqueGadoInicial' ,align:'center'},
          
        ],
        desserts3: [
          {
            
            name: 'Fêmeas + 36 meses',
            rebanhoRecriaPesoVivoInicial: 159,
            
            rebanhoRecriaValorEstoqueGadoInicial: 24,
            
            
          },
          {
            name: 'Fêmeas 24-36 meses',
            rebanhoRecriaPesoVivoInicial: 237,
            
            rebanhoRecriaValorEstoqueGadoInicial: 37,
            
            
          },
          {
            name: 'Fêmeas 12-24 meses',
            rebanhoRecriaPesoVivoInicial: 237,
            
            rebanhoRecriaValorEstoqueGadoInicial: 37,
            
            
          },
          {
            name: 'Machos 0-12 meses',
            rebanhoRecriaPesoVivoInicial: 237,
            
            rebanhoRecriaValorEstoqueGadoInicial: 37,
            
            
          },
          {
            name: 'Machos 12-24 meses',
            rebanhoRecriaPesoVivoInicial: 237,
            
            rebanhoRecriaValorEstoqueGadoInicial: 37,
            
            
          },
          {
            name: 'Machos 24-36 meses',
            rebanhoRecriaPesoVivoInicial: 237,
            
            rebanhoRecriaValorEstoqueGadoInicial: 37,
            
            
          },
          {
            name: 'Machos + 36 meses inclusive tourunos',
            rebanhoRecriaPesoVivoInicial: 237,
            
            rebanhoRecriaValorEstoqueGadoInicial: 37,
            
            
          },
          {
            name: 'SUBTOTAL',
            rebanhoRecriaPesoVivoInicial: 237,
            
            rebanhoRecriaValorEstoqueGadoInicial: 37,
            
            
          },
          
          
          
        ],


        headers4: [
          {
            text: 'Rebanho de Recria/Engorda',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Peso vivo total do rebanho(kg) Final', value: 'rebanhoRecriaPesoVivoFinal' ,align:'center',},
          
          { text: 'Valor estoque gado (R$) Final', value: 'rebanhoRecriaValorEstoqueGadoFinal' ,align:'center'},
          
        ],
        desserts4: [
          {
            
            name: 'Fêmeas + 36 meses',
            rebanhoRecriaPesoVivoFinal: 159,
            
            rebanhoRecriaValorEstoqueGadoFinal: 24,
            
            
          },
          {
            name: 'Fêmeas 24-36 meses',
            rebanhoRecriaPesoVivoFinal: 237,
            
            rebanhoRecriaValorEstoqueGadoFinal: 37,
            
            
          },
          {
            name: 'Fêmeas 12-24 meses',
            rebanhoRecriaPesoVivoFinal: 237,
            
            rebanhoRecriaValorEstoqueGadoFinal: 37,
            
            
          },
          {
            name: 'Machos 0-12 meses',
            rebanhoRecriaPesoVivoFinal: 237,
            
            rebanhoRecriaValorEstoqueGadoFinal: 37,
            
            
          },
          {
            name: 'Machos 12-24 meses',
            rebanhoRecriaPesoVivoFinal: 237,
            
            rebanhoRecriaValorEstoqueGadoFinal: 37,
            
            
          },
          {
            name: 'Machos 24-36 meses',
            rebanhoRecriaPesoVivoFinal: 237,
            
            rebanhoRecriaValorEstoqueGadoFinal: 37,
            
            
          },
          {
            name: 'Machos + 36 meses inclusive tourunos',
            rebanhoRecriaPesoVivoFinal: 237,
            
            rebanhoRecriaValorEstoqueGadoFinal: 37,
            
            
          },
          {
            name: 'SUBTOTAL',
            rebanhoRecriaPesoVivoFinal: 237,
            
            rebanhoRecriaValorEstoqueGadoFinal: 37,
            
            
          },
          {
            name: 'Diferença no Estoque e Valor do Gado de Recria/Engorda(final-inicial)',
            rebanhoRecriaPesoVivoFinal: 237,
            
            rebanhoRecriaValorEstoqueGadoFinal: 37,
            
            
          },
        ],

        headers6: [
          {
            text: 'Rebanho de Recria/ Engorda',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          
          { text: 'Cabeças Inicial', value: 'rebanhoRecriaCabecasInicial' ,align:'center'},
         
          { text: 'Cabeças Final', value: 'rebanhoRecriaCabecasFinal',align:'center' },
          
        ],
        desserts6: [
          {
            name: 'SUBTOTAL',
            
            rebanhoRecriaCabecasInicial: 6.0,
            
            rebanhoRecriaCabecasFinal: 4.0,
            
          },
        ],

        headers7: [
          {
            text: 'Rebanho Total',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          
         
          { text: 'Cabeças Final', value: 'rebanhoTotalCabecasFinal',align:'center' },
          
        ],
        desserts7: [
          {
            name: 'TOTAL',
            
            
            
            rebanhoTotalCabecasFinal: 4.0,
            
          },
          {
            name: 'Diferença no Estoque Total de Gado(Final-Inicial)',
            
            
            
            rebanhoTotalCabecasFinal: 4.0,
            
          },
        ],

        headers8: [
          {
            text: 'Rebanho Total',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Peso vivo total do rebanho(kg) Inicial', value: 'rebanhoTotalPesoVivoInicial' ,align:'center',},
          
          { text: 'Valor estoque gado (R$) Inicial', value: 'rebanhoTotalValorEstoqueGadoInicial' ,align:'center'},
          
        ],
        desserts8: [
          {
            
            name: 'TOTAL',
            rebanhoTotalPesoVivoInicial: 159,
            
            rebanhoTotalValorEstoqueGadoInicial: 24,
            
            
          },
          
          
          
        ],



         headers9: [
          {
            text: 'Rebanho Total',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Peso vivo total do rebanho(kg) Final', value: 'rebanhoTotalPesoVivoFinal' ,align:'center',},
          
          { text: 'Valor estoque gado (R$) Final', value: 'rebanhoTotalValorEstoqueGadoFinal' ,align:'center'},
          
        ],
        desserts9: [
          {
            
            name: 'TOTAL',
            rebanhoTotalPesoVivoFinal: 159,
            
            rebanhoTotalValorEstoqueGadoFinal: 24,
            
            
          },
          {
            
            name: 'Diferença no Estoque Total de Gado(Final-Inicial)',
            rebanhoTotalPesoVivoFinal: 159,
            
            rebanhoTotalValorEstoqueGadoFinal: 24,
            
            
          },
        ],

        headers10: [
          {
            text: 'Rebanho Total',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'TOTAL DO REBANHO (MÉDIO) EM CABEÇAS', value: 'totalRebanhoMedioCabecas' ,align:'center',},
          
          { text: 'TOTAL DO REBANHO (MÉDIO) EM UA', value: 'totalRebanhoMedioUA' ,align:'center'},
          
        ],
        desserts10: [
          {
            
            name: '',
            
            
            totalRebanhoMedioCabecas: 159,
            
            totalRebanhoMedioUA: 24,
            
            
          },
        ],
  }),

  created() {
    var db = new Dexie("simulacao");
    db.version(1).stores({
      simulacao: "id,formularioDB"
    });

    db.simulacao
      .get(1)
      .then(f => (this.formulario = new Formulario(f.formularioDB)));
  }
};
</script>
<style scoped>
@media screen and (max-width: 991px) {
  .container {
    position: absolute;
    padding: 1%;
    
    text-align: center;

    background-color: #00695c;
    min-height: 100%;
    max-width: none;

    color: azure;
  }

  .panel {
    box-shadow: 0 4px 15px black;
    max-width: none;
  }
  
  
  .button {
    margin-top: 5%;
    margin-bottom: 5%;
    float: right;
  }
  .divider {
    margin-top: 5%;
    text-align: center;
    font-size: 130%;
    color: #00695c;
  }
  .divider2 {
    margin-top: 5%;
    margin-left: 5%;
    font-size: 110%;
  }


  .elevation-1{
    margin-top: 3%;
    
  }
}

@media screen and (min-width: 992px) {
  .container {
    
    margin-top: 2%;
    position: absolute;
    text-align: center;

    background-color: #00695c;
    min-height: 100%;
    max-width: none;

    color: azure;
  
  }
  
  h1 {
    font-size: 250%;
  }

  .panel {
    box-shadow: 0 4px 10px black;
   
  }
  
  
  .button {
    margin-top: 2%;
    margin-bottom: 2%;
    float: right;
  }

  .divider {
    margin-top: 5%;
    text-align: center;
    font-size: 180%;
    color: #00695c;
  }
  .divider2 {
    font-size: 150%;
    margin-top: 5%;
    margin-left: 5%;
  }
  .layout {
    margin-left: 5%;
  }
  .elevation-1{
    margin-top: 3%;
    border:solid;
    margin-left: 2%;
    margin-right: 2%;
    border-width: 1px;
    
    
    border-color: #004F48;
    
  }
}
</style>
