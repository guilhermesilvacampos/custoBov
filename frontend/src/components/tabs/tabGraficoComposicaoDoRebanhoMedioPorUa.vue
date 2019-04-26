<template>
    <v-tabs v-model="active" color="#00695c" dark slider-color="blue">
                <v-tab ripple>Composição (%) do rebanho médio (Por UA) Percentual</v-tab>
                <v-tab ripple>Composição (%) do rebanho médio (Por UA) Absoluto</v-tab>
                <v-tab-item v-for="n in 2" :key="n">

                  <v-card flat>
                   

                   
                  </v-card>
                </v-tab-item>
              </v-tabs>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>
