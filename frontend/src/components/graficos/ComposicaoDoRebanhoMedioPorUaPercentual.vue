<template>
  <pie-chart
    :data="chartDataComposiçãoDoRebanhoMedioPorUaPercentual"
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
  chartDataComposiçãoDoRebanhoMedioPorUaPercentual: {
        labels: ["Touros", "Vacas(Matrizes)", "Fêmeas +36 meses", "Fêmeas 24-36 meses","Fêmeas 12-24 meses","Fêmeas 0-12 meses", "Machos 12-24 meses", "Machos 24-36 meses","Machos +36 meses inclusive tourunos"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["grey","orange","purple","red", "blue", "black","green","brown","pink","violet"],
            data: [1, 2, 5,2,8,15,7,3,5,6]
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
