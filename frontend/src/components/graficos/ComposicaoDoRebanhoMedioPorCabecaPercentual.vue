<template>
  <pie-chart
    :data="chartDataComposiçãoDoRebanhoMedioPorCabecasPercentual"
    :options="opt"
    :styles="estilo"
  ></pie-chart>
</template>
<script>
import PieChart from "../components/graficos/PieChart.js";
export default {
     components: {
    PieChart
  },
    opt: {
      responsive: true,
      maintainAspectRatio: true
    },
    estilo: {
      height: "40%",
      width: "40%"
    },
    chartDataComposiçãoDoRebanhoMedioPorCabecasPercentual:{
    labels: ["Green", "Red", "Blue"],
      datasets: [
        {
          backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
          data: [1, 10, 5],
        }
}
     

    
};
</script>
<style scoped>
</style>
