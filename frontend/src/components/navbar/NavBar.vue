<template>

  <v-navbar>
    <v-toolbar app>
      <img class="logo" src="../../../public/img/icons/logoCustoBov.png" >
      <a href = "/relatorio">
      <v-toolbar-title class="headline text-uppercase">
        <span>Login</span>
      </v-toolbar-title>
      </a>
    </v-toolbar>

  </v-navbar>

</template>

<script>


export default {
  
  data () {
    return {
      //
    }
  }
}
</script>
<style scoped>

.logo{
  max-width: 85%;
  max-height: 90%;
}
a{
  text-decoration-line: none;
  color: grey;
}
</style>
