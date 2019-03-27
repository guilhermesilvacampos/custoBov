<template>
  <v-app>
    <div>
<navbar/>
<router-view></router-view>
    </div>
  </v-app>
</template>
<script>
 import NavBar from './components/navbar/NavBar.vue'
 import Inicial from './view/Inicial.vue'
export default {
  
  components:{
    'navbar' : NavBar,
    'inicial' : Inicial
  }
 
  
}
</script>
<style scoped>

</style>

