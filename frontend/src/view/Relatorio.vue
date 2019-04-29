<template>
  <v-container grid-list-md text-xs-center>
    <v-content>
      <h1>Relatórios</h1>
      <br>
      <v-expansion-panel v-model="panel[0]" expand class="panel">
        
        <v-expansion-panel-content>
          
          <template v-slot:header>
            <h2>Dados Gerais do Rebanho de Reprodução</h2>
          </template>
          

          <v-data-table hide-actions :headers="headers" :items="desserts" class="elevation-1">
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-center">{{ props.item.rebanhoReproducaoPesoVivoInicial }}</td>
              <td class="text-xs-center">{{ props.item.rebanhoReproducaoPesoVivoFinal }}</td>
              <td class="text-xs-center">{{ props.item.rebanhoReproducaoValorEstoqueGadoInicial }}</td>
              <td class="text-xs-center">{{ props.item.rebanhoReproducaoValorEstoqueGadoFinal }}</td>
            </template>
          </v-data-table>

          <v-data-table hide-actions :headers="headers5" :items="desserts5" class="elevation-1">
            <template v-slot:items="props5">
              <td>{{ props5.item.name }}</td>

              <td class="text-xs-center">{{ props5.item.rebanhoReproducaoCabecasInicial }}</td>
              <td class="text-xs-center">{{ props5.item.rebanhoReproducaoCabecasFinal }}</td>
            </template>
          </v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel v-model="panel[1]" expand class="panel">
        <v-expansion-panel-content>
          <template v-slot:header>
            <h2>Dados Gerais do Rebanho de Recria/Engorda</h2>
          </template>

          <v-data-table hide-actions :headers="headers2" :items="desserts2" class="elevation-1">
            <template v-slot:items="props2">
              <td>{{ props2.item.name }}</td>
              <td class="text-xs-center">{{ props2.item.rebanhoRecriaPesoPorCabecaMedia }}</td>
              <td class="text-xs-center">{{ props2.item.rebanhoRecriaPesoVivoInicial }}</td>
              <td class="text-xs-center">{{ props2.item.rebanhoRecriaPesoVivoFinal }}</td>
              <td class="text-xs-center">{{ props2.item.rebanhoRecriaValorEstoqueGadoInicial }}</td>
              <td class="text-xs-center">{{ props2.item.rebanhoRecriaValorEstoqueGadoFinal }}</td>
            </template>
          </v-data-table>

          <v-data-table hide-actions :headers="headers6" :items="desserts6" class="elevation-1">
            <template v-slot:items="props6">
              <td>{{ props6.item.name }}</td>

              <td class="text-xs-center">{{ props6.item.rebanhoRecriaCabecasInicial }}</td>
              <td class="text-xs-center">{{ props6.item.rebanhoRecriaCabecasFinal }}</td>
            </template>
          </v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel v-model="panel[2]" expand class="panel">
        <v-expansion-panel-content>
          <template v-slot:header>
            <h2>Dados Gerais do Rebanho Total</h2>
          </template>

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

          <v-data-table hide-actions :headers="headers10" :items="desserts10" class="elevation-1">
            <template v-slot:items="props10">
              <td>{{ props10.item.name }}</td>
              <td class="text-xs-center">{{ props10.item.totalRebanhoMedioCabecas }}</td>

              <td class="text-xs-center">{{ props10.item.totalRebanhoMedioUA }}</td>
            </template>
          </v-data-table>

          

</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel v-model="panel[1]" expand class="panel">
        <v-expansion-panel-content>
          <template v-slot:header>
            <h2>Graficos Gerais do Rebanho</h2>
          </template>
            
              <div class="grafico">
                <v-layout row wrap >
      <v-flex xs12 md6>
        <v-card >

          <tab-grafico-composicao-do-rebanho-por-cabeca/>

        </v-card>
      </v-flex>
        <v-flex xs12 md6>
        <v-card >

          <tab-grafico-composicao-do-rebanho-por-ua/>

        </v-card>

      </v-flex>



              </v-layout>
              </div>

              <div class="grafico1">
              <v-layout row wrap>
                
               <v-flex xs12 md12>
        <v-card >

          <tab-grafico-composicao-do-rebanho-por-categoria-animal/>

        </v-card>

      </v-flex>
       
              
              </v-layout>
              </div>
              <v-flex offset-md5 offset-xs2 offset-sm3>

      <v-btn  href="/#/" class="button" color="success">Visualizar Formulário !{{form}}</v-btn>
              </v-flex>

</v-expansion-panel-content>
      </v-expansion-panel>

              
            
          
        
    </v-content>
  </v-container>
</template>
<script>
import Formulario from "../class/Formulario.js";
import BibliotecaDeCalculos from "bibliotecadecalculos";
import TabGraficoComposicaoDoRebanhoPorCabeca from '../components/tabs/TabGraficoComposicaoDoRebanhoMedioPorCabeca.vue'
import TabGraficoComposicaoDoRebanhoPorUa from '../components/tabs/TabGraficoComposicaoDoRebanhoMedioPorUa.vue'
import TabGraficoValorDoRebanhoMedioPorCategoriaAnimal from '../components/tabs/TabGraficoValorDoRebanhoMedioPorCategoriaAnimal.vue'


export default {
  components:{
    'tab-grafico-composicao-do-rebanho-por-cabeca' : TabGraficoComposicaoDoRebanhoPorCabeca,
    'tab-grafico-composicao-do-rebanho-por-ua' : TabGraficoComposicaoDoRebanhoPorUa,
    'tab-grafico-composicao-do-rebanho-por-categoria-animal' : TabGraficoValorDoRebanhoMedioPorCategoriaAnimal,
  },
 
  data: () => ({
    panel: [0, 0, 0,0],
    formulario: "",
    resultadoCalculoReproducao: "",
    form: "",
    active: null,

    headers: [
      {
        text: "Rebanho de Reprodução",
        align: "left",
        sortable: false,
        value: "name"
      },

      {
        text: "Peso vivo total do rebanho(kg) Inicial",
        value: "rebanhoReproducaoPesoVivoInicial",
        align: "left"
      },
      {
        text: "Peso vivo total do rebanho(kg) Final",
        value: "rebanhoReproducaoPesoVivoFinal",
        align: "left"
      },

      {
        text: "Valor estoque gado (R$) Inicial",
        value: "rebanhoReproducaoValorEstoqueGadoInicial",
        align: "left"
      },
      {
        text: "Valor estoque gado(R$) Final",
        value: "rebanhoReproducaoValorEstoqueGadoFinal",
        align: "left"
      }
    ],
    desserts: [
      {
        name: "Touros",
        rebanhoReproducaoPesoVivoInicial: "erro",
        rebanhoReproducaoPesoVivoFinal: "erro",
        rebanhoReproducaoValorEstoqueGadoInicial: "erro",
        rebanhoReproducaoValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Vacas (Matrizes)",
        rebanhoReproducaoPesoVivoInicial: "erro",
        rebanhoReproducaoPesoVivoFinal: "erro",
        rebanhoReproducaoValorEstoqueGadoInicial: "erro",
        rebanhoReproducaoValorEstoqueGadoFinal: "erro"
      },
      {
        name: "SUBTOTAL",

        rebanhoReproducaoPesoVivoInicial: "erro",
        rebanhoReproducaoPesoVivoFinal: "erro",
        rebanhoReproducaoValorEstoqueGadoInicial: "erro",
        rebanhoReproducaoValorEstoqueGadoFinal: "erro"
      },

      {
        name: "Diferença no Estoque e Valor Do Gado de Cria (final-inicial)",

        rebanhoReproducaoPesoVivoFinal: "erro",

        rebanhoReproducaoValorEstoqueGadoFinal: "erro"
      }
    ],

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

    headers2: [
      {
        text: "Rebanho de Recria/Engorda",
        align: "left",
        sortable: false,
        value: "name"
      },
      {
        text: "Peso por cabeça(kg) Média",
        value: "rebanhoRecriaPesoPorCabecaMedia",
        align: "center"
      },
      {
        text: "Peso vivo total do rebanho(kg) Inicial",
        value: "rebanhoRecriaPesoVivoInicial",
        align: "center"
      },
      {
        text: "Peso vivo total do rebanho(kg) Final",
        value: "rebanhoRecriaPesoVivoFinal",
        align: "center"
      },

      {
        text: "Valor estoque gado (R$) Inicial",
        value: "rebanhoRecriaValorEstoqueGadoInicial",
        align: "center"
      },

      {
        text: "Valor estoque gado (R$) Final",
        value: "rebanhoRecriaValorEstoqueGadoFinal",
        align: "center"
      }
    ],
    desserts2: [
      {
        name: "Fêmeas + 36 meses",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Fêmeas 24-36 meses",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Fêmeas 12-24 meses ",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Fêmeas 0-12 meses",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Machos 0-12 meses",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Machos 12-24 meses ",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Machos 24-36 meses",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Machos + 36 meses inclusive tourunos ",
        rebanhoRecriaPesoPorCabecaMedia: "erro",
        rebanhoRecriaPesoVivoInicial: "erro",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoInicial: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      },
      {
        name: "Diferença",
        rebanhoRecriaPesoVivoFinal: "erro",
        rebanhoRecriaValorEstoqueGadoFinal: "erro"
      }
    ],

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
  methods: {
    next() {
      const active = parseInt(this.active);
      this.active = active < 2 ? active + 1 : 0;
    }
  },

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
          //reprodução

          (this.desserts[0].rebanhoReproducaoPesoVivoInicial = g[0].pesoVivoTotalDoRebanhoInicialTouro()),
          (this.desserts[0].rebanhoReproducaoValorEstoqueGadoInicial = g[0].valorEstoqueInicialTouro()),
          (this.desserts[1].rebanhoReproducaoPesoVivoInicial = g[0].pesoVivoTotalDoRebanhoInicialVaca()),
          (this.desserts[1].rebanhoReproducaoValorEstoqueGadoInicial = g[0].valorEstoqueInicialVaca()),
          (this.desserts[2].rebanhoReproducaoPesoVivoInicial = g[0].subtotalDoPesoVivoTotalInicial()),
          (this.desserts[2].rebanhoReproducaoValorEstoqueGadoInicial = g[0].subtotalDoValorDoEstoqueInicial()),
          (this.desserts[0].rebanhoReproducaoPesoVivoFinal = g[0].pesoVivoTotalDoRebanhoFinalTouro()),
          (this.desserts[0].rebanhoReproducaoValorEstoqueGadoFinal = g[0].valorEstoqueFinalTouro()),
          (this.desserts[1].rebanhoReproducaoPesoVivoFinal = g[0].pesoVivoTotalDoRebanhoFinalVaca()),
          (this.desserts[1].rebanhoReproducaoValorEstoqueGadoFinal = g[0].valorEstoqueFinalVaca()),
          (this.desserts[2].rebanhoReproducaoPesoVivoFinal = g[0].diferencaDePesoNoEstoque()),
          (this.desserts[2].rebanhoReproducaoValorEstoqueGadoFinal = g[0].diferencaNoValorDoEstoque()),
          (this.desserts[3].rebanhoReproducaoPesoVivoFinal = g[0].subtotalDoPesoVivoTotalFinal()),
          (this.desserts[3].rebanhoReproducaoValorEstoqueGadoFinal = g[0].subtotalDoValorDoEstoqueFinal()),
          (this.desserts5[0].rebanhoReproducaoCabecasInicial = g[0].subtotalDeCabecasInicial()),
          (this.desserts5[0].rebanhoReproducaoCabecasFinal = g[0].subtotalDeCabecasFinal()),
          //recria/ engorda

          (this.desserts2[0].rebanhoRecriaPesoPorCabecaMedia = g[1].calculaMediaPesoFemeas36()),
          (this.desserts2[0].rebanhoRecriaPesoVivoInicial = g[1].calculaPesoTotaldoRebanhoInicialFemeas36()),
          (this.desserts2[0].rebanhoRecriaPesoVivoFinal = g[1].calculaPesoTotaldoRebanhoFinalFemeas36()),
          (this.desserts2[0].rebanhoRecriaValorEstoqueGadoInicial = g[1].calculaValorInicialEstoqueFemeas36()),
          (this.desserts2[0].rebanhoRecriaValorEstoqueGadoFinal = g[1].calculaValorFinalEstoqueFemeas36()),
          (this.desserts2[1].rebanhoRecriaPesoPorCabecaMedia = g[1].calculaMediaPesoFemeas2436()),
          (this.desserts2[1].rebanhoRecriaPesoVivoInicial = g[1].calculaPesoTotaldoRebanhoInicialFemeas2436()),
          (this.desserts2[1].rebanhoRecriaPesoVivoFinal = g[1].calculaPesoTotaldoRebanhoFinalFemeas2436()),
          (this.desserts2[1].rebanhoRecriaValorEstoqueGadoInicial = g[1].calculaValorInicialEstoqueFemeas2436()),
          (this.desserts2[1].rebanhoRecriaValorEstoqueGadoFinal = g[1].calculaValorFinalEstoqueFemeas2436()),
          (this.desserts2[2].rebanhoRecriaPesoPorCabecaMedia = g[1].calculaMediaPesoFemeas1224()),
          (this.desserts2[2].rebanhoRecriaPesoVivoInicial = g[1].calculaPesoTotaldoRebanhoInicialFemeas1224()),
          (this.desserts2[2].rebanhoRecriaValorEstoqueGadoInicial = g[1].calculaValorInicialEstoqueFemeas1224()),
          (this.desserts2[2].rebanhoRecriaValorEstoqueGadoFinal = g[1].calculaValorFinalEstoqueFemeas1224()),
          (this.desserts2[2].rebanhoRecriaPesoVivoFinal = g[1].calculaPesoTotaldoRebanhoFinalFemeas1224()),
          (this.desserts2[3].rebanhoRecriaPesoPorCabecaMedia = g[1].calculaMediaPesoFemeas012()),
          (this.desserts2[3].rebanhoRecriaPesoVivoInicial = g[1].calculaPesoTotaldoRebanhoInicialFemeas012()),
          (this.desserts2[3].rebanhoRecriaPesoVivoFinal = g[1].calculaPesoTotaldoRebanhoFinalFemeas012()),
          (this.desserts2[3].rebanhoRecriaValorEstoqueGadoInicial = g[1].calculaValorInicialEstoqueFemeas012()),
          (this.desserts2[3].rebanhoRecriaValorEstoqueGadoFinal = g[1].calculaValorFinalEstoqueFemeas012()),
          (this.desserts2[4].rebanhoRecriaPesoPorCabecaMedia = g[1].calculaMediaPesoMachos012()),
          (this.desserts2[4].rebanhoRecriaPesoVivoInicial = g[1].calculaPesoTotaldoRebanhoInicialMachos012()),
          (this.desserts2[4].rebanhoRecriaValorEstoqueGadoInicial = g[1].calculaValorInicialEstoqueMachos012()),
          (this.desserts2[4].rebanhoRecriaValorEstoqueGadoFinal = g[1].calculaValorFinalEstoqueMachos012()),
          (this.desserts2[4].rebanhoRecriaPesoVivoFinal = g[1].calculaPesoTotaldoRebanhoFinalMachos012()),
          (this.desserts2[5].rebanhoRecriaPesoPorCabecaMedia = g[1].calculaMediaPesoMachos1224()),
          (this.desserts2[5].rebanhoRecriaPesoVivoInicial = g[1].calculaPesoTotaldoRebanhoInicialMachos1224()),
          (this.desserts2[5].rebanhoRecriaPesoVivoFinal = g[1].calculaPesoTotaldoRebanhoFinalMachos1224()),
          (this.desserts2[5].rebanhoRecriaValorEstoqueGadoInicial = g[1].calculaValorInicialEstoqueMachos1224()),
          (this.desserts2[5].rebanhoRecriaValorEstoqueGadoFinal = g[1].calculaValorFinalEstoqueMachos1224()),
          (this.desserts2[6].rebanhoRecriaPesoPorCabecaMedia = g[1].calculaMediaPesoMachos2436()),
          (this.desserts2[6].rebanhoRecriaPesoVivoInicial = g[1].calculaPesoTotaldoRebanhoInicialMachos2436()),
          (this.desserts2[6].rebanhoRecriaPesoVivoFinal = g[1].calculaPesoTotaldoRebanhoFinalMachos2436()),
          (this.desserts2[6].rebanhoRecriaValorEstoqueGadoInicial = g[1].calculaValorInicialEstoqueMachos2436()),
          (this.desserts2[6].rebanhoRecriaValorEstoqueGadoFinal = g[1].calculaValorFinalEstoqueMachos2436()),
          (this.desserts2[7].rebanhoRecriaPesoPorCabecaMedia = g[1].calculaMediaPesoMachos36()),
          (this.desserts2[7].rebanhoRecriaPesoVivoInicial = g[1].calculaPesoTotaldoRebanhoInicialMachos36()),
          (this.desserts2[7].rebanhoRecriaPesoVivoFinal = g[1].calculaPesoTotaldoRebanhoFinalMachos36()),
          (this.desserts2[7].rebanhoRecriaValorEstoqueGadoInicial = g[1].calculaValorInicialEstoqueMachos36()),
          (this.desserts2[7].rebanhoRecriaValorEstoqueGadoFinal = g[1].calculaValorFinalEstoqueMachos36()),
          (this.desserts2[8].rebanhoRecriaPesoVivoFinal = g[1].diferencaDePesoNoEstoque()),
          (this.desserts2[8].rebanhoRecriaValorEstoqueGadoFinal = g[1].diferencaNoValorDoEstoque()),
          (this.desserts6[0].rebanhoRecriaCabecasInicial = g[1].subtotalDeCabecasInicial()),
          (this.desserts6[0].rebanhoRecriaCabecasFinal = g[1].subtotalDeCabecasFinal()),
          //rebanho Total

          (this.desserts7[0].rebanhoTotalCabecasInicial = g[2].totalCabecaInicial()),
          (this.desserts7[0].rebanhoTotalCabecasFinal = g[2].totalCabecaFinal()),
          (this.desserts7[0].rebanhoTotalPesoVivoInicial = g[2].totalPesoVivoInicialDoRebanho()),
          (this.desserts7[0].rebanhoTotalPesoVivoFinal = g[2].totalPesoVivoFinalDoRebanho()),
          (this.desserts7[0].rebanhoTotalValorEstoqueGadoInicial = g[2].totalValorEstoqueInicial()),
          (this.desserts7[0].rebanhoTotalValorEstoqueGadoFinal = g[2].totalValorEstoqueFinal()),
          (this.desserts7[1].rebanhoTotalCabecasFinal = g[2].diferencaDeCabecasEstoqueTotal()),
          (this.desserts7[1].rebanhoTotalPesoVivoFinal = g[2].diferencaPesovivoTotal()),
          (this.desserts7[1].rebanhoTotalValorEstoqueGadoFinal = g[2].diferencaValorTotal()),
          (this.desserts10[0].totalRebanhoMedioCabecas = g[2].rebanhoTotalMedia()),
          (this.desserts10[0].totalRebanhoMedioUA = g[2].calculaRebanhoTotalUA())
        )
      );
  }
};
</script>
<style scoped>
@media screen and (max-width: 991px) {
  h2 {
    color: #00695c;
  }
  .grafico {
    display: inline-block;
    margin-top: 5%;
    
    margin-bottom: 3%;
  }
  .chart {
    margin-top: 3%;
  }
  .container {
    position: absolute;
    padding: 1%;

    text-align: center;

    background-color: #00695c;
    min-height: 100vh;
    max-width: none;

    color: azure;
  }

  .panel {
    margin-top: 3%;
    padding-bottom: 3%;
    background-color: white;
    box-shadow: 0 4px 15px black;
  }

  .button {
    margin-top: 5%;
    margin-bottom: 5%;
    
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

  .elevation-1 {
    margin-top: 3%;
    border: solid;
    margin-left: 1%;
    margin-right: 1%;
    border-width: 1px;
    border-color: #004f48;
  }

  .v-datatable {
    max-width: 90%;
  }
}

@media screen and (min-width: 992px) {
  h2 {
    color: #00695c;
  }

  .chart {
    margin-top: 3%;
  }

  .grafico {
    display: inline-block;
    margin-top: 5%;
    margin-left: 7%;
    margin-right: 1%;
    margin-bottom: 5%;
  }
  .grafico1{
    display: inline-block;
    margin-top: 2%;
    margin-left: 30%;
    margin-right: 1%;
    margin-bottom: 5%;
  }
  .container {
    margin-top: 2%;
    position: absolute;
    text-align: center;

    background-color: #00695c;
    min-height: 100vh;
    max-width: none;

    color: azure;
  }

  h1 {
    font-size: 250%;
  }

  .panel {
    margin-top: 2%;
    padding-bottom: 1%;
    background-color: white;
    box-shadow: 0 4px 10px black;
  }

  .button {
    
    
    margin-bottom: 2%;
    
    
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
