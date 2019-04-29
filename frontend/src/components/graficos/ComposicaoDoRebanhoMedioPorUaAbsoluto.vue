<template>
  <pie-chart
    :data="chartDataComposiçãoDoRebanhoMedioPorUaAbsoluto"
    :options="opt"
    :styles="estilo"
  />
</template>
<script>
import PieChart from "./PieChart.js";
export default {
     components: {
    PieChart,
  },
  data: () => ({
  chartDataComposiçãoDoRebanhoMedioPorUaAbsoluto: {
        labels: ["Touros", "Vacas(Matrizes)", "Fêmeas +36 meses", "Fêmeas 24-36 meses","Fêmeas 12-24 meses","Fêmeas 0-12 meses", "Machos 12-24 meses", "Machos 24-36 meses","Machos +36 meses inclusive tourunos"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["orange","purple","red", "blue", "black","green","grey","brown","pink","violet"],
            data: [3, 7, 5,2,8,7,7,3,5,6]
          }
        ]
      },

    opt: {
      responsive: true,
      maintainAspectRatio: true
    },

    estilo: {
      height: "100%",
      width: "100%"
    },

  })
     

    
};
</script>
<style scoped>
</style>
