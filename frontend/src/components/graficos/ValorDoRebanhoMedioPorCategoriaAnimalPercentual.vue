<template>
  <pie-chart
    :data="chartDataValorDoRebanhoMedioPorCategoriaAnimalPercentual"
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
  chartDataValorDoRebanhoMedioPorCategoriaAnimalPercentual: {
        labels: ["Touros", "Vacas(Matrizes)", "Fêmeas +36 meses", "Fêmeas 24-36 meses","Fêmeas 12-24 meses","Fêmeas 0-12 meses", "Machos 12-24 meses", "Machos 24-36 meses","Machos +36 meses inclusive tourunos"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["black","green","grey","orange","purple","red", "blue","brown","pink","violet"],
            data: [8, 10, 5,5,8,9,7,3,7,6]
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
