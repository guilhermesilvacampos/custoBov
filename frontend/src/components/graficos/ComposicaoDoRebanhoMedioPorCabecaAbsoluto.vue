<template>
  <pie-chart
    :data="chartDataComposiçãoDoRebanhoMedioPorCabecasPercentual"
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
  chartDataComposiçãoDoRebanhoMedioPorCabecasPercentual: {
        labels: ["Yellow", "Blue", "Black"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["yellow", "blue", "black"],
            data: [1, 10, 5]
          }
        ]
      },

    opt: {
      responsive: true,
      maintainAspectRatio: true
    },

    estilo: {
      height: "70%",
      width: "70%"
    },

  })
     

    
};
</script>
<style scoped>
</style>
