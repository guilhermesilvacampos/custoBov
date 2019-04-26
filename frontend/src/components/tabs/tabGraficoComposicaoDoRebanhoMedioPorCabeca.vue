<template>

<v-tabs v-model="active" color="#00695c" dark slider-color="blue">
                <v-tab ripple>Composição do rebanho médio (por cabecas) Percentual</v-tab>
                <v-tab ripple>Composição do rebanho médio (por cabecas) Absoluto</v-tab>
                <v-tab-item v-for="n in 2" :key="n">

                  <v-card flat>
                   

                   
                  </v-card>
                </v-tab-item>
              </v-tabs>
    
</template>
<script>
impor
export default {
    
}
</script>
<style scoped>

</style>
