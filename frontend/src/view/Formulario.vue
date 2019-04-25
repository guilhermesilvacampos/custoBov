<template>
  <v-formulario>
    <v-container class="container" grid-list-md fluid>
      <v-content>
        <h1>Está Pronto Para Fazer Sua Simulação?</h1>

        <v-form class="form" @submit.prevent="grava()">
          <v-expansion-panel class="panel" v-model="panel[0]" expand>
            <v-expansion-panel-content>
              <template v-slot:header>
                <h2>Dados Iniciais</h2>
              </template>
              <v-flex xs6 sm6 md6>
                <v-text-field
                  name="ano"
                  type="number"
                  v-validate="'required|date_format:yyyy'"
                  :error-messages="errors.collect('ano')"
                  data-vv-name="ano"
                  background-color="white"
                  label="Ano"
                  box
                  v-model="formulario.ano"
                  required
                  lazy-validation
                ></v-text-field>
              </v-flex>

              <v-flex xs6 sm6 md6>
                <v-text-field
                  background-color="white"
                  label="Fazenda"
                  box
                  v-model="formulario.fazenda"
                  v-validate="'required'"
                  :error-messages="errors.collect('fazenda')"
                  data-vv-name="fazenda"
                  required
                  lazy-validation
                ></v-text-field>
              </v-flex>

              <v-flex xs6 sm6 md6>
                <v-text-field
                  background-color="white"
                  label="Município"
                  box
                  v-model="formulario.municipio"
                  v-validate="'required'"
                  :error-messages="errors.collect('municipio')"
                  data-vv-name="municipio"
                  required
                  lazy-validation
                ></v-text-field>
              </v-flex>
            </v-expansion-panel-content>
          </v-expansion-panel>
         

          <v-expansion-panel v-model="panel[1]" expand class="panel">
            <v-expansion-panel-content>
              <template v-slot:header>
                <h2>Dados Do Rebanho de Reprodução</h2>
              </template>

              
              <div class="divider2">
                <span>
                  <b>Touros</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs7 sm7 md3>
                  <v-text-field
                    name="touroPesoMedio"
                    type="number"
                    v-validate="'required'"
                    :error-messages="errors.collect('touroPesoMedio')"
                    data-vv-name="touroPesoMedio"
                    background-color="white"
                    label="Peso Médio kg/cab"
                    box
                    v-model="formulario.RebanhoDeReproducao.touroPesoMedio"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md3>
                  <v-text-field
                    name="touroCabecaInicial"
                    type="number"
                    background-color="white"
                    label="Cabeças-Inicial"
                    box
                    v-model="formulario.RebanhoDeReproducao.touroCabecaInicial"
                    v-validate="'required'"
                    :error-messages="errors.collect('touroCabecaInicial')"
                    data-vv-name="touroCabecaInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="touroCabecaFinal"
                    type="number"
                    background-color="white"
                    label="Cabeças-Final"
                    box
                    v-model="formulario.RebanhoDeReproducao.touroCabecaFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('touroCabecaFinal')"
                    data-vv-name="touroCabecaFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>
                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="touroValor"
                    type="number"
                    background-color="white"
                    label="Valor R$/cab"
                    box
                    v-model="formulario.RebanhoDeReproducao.touroValor"
                    v-validate="'required'"
                    :error-messages="errors.collect('touroValor')"
                    data-vv-name="touroValor"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <div class="divider2">
                <span>
                  <b>Vacas(Matrizes)</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs7 sm7 md3>
                  <v-text-field
                    name="vacaMatrizPesoMedio"
                    type="number"
                    v-validate="'required'"
                    :error-messages="errors.collect('vacaMatrizPesoMedio')"
                    data-vv-name="vacaMatrizPesoMedio"
                    background-color="white"
                    label="Peso Médio kg/cab"
                    box
                    v-model="formulario.RebanhoDeReproducao.vacaMatrizPesoMedio"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md3>
                  <v-text-field
                    name="vacaMatrizCabecaInicial"
                    type="number"
                    background-color="white"
                    label="Cabeças-Inicial"
                    box
                    v-model="formulario.RebanhoDeReproducao.vacaMatrizCabecaInicial"
                    v-validate="'required'"
                    :error-messages="errors.collect('vacaMatrizCabecaInicial')"
                    data-vv-name="vacaMatrizCabecaInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="vacaMatrizCabecaFinal"
                    type="number"
                    background-color="white"
                    label="Cabeças-Final"
                    box
                    v-model="formulario.RebanhoDeReproducao.vacaMatrizCabecaFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('vacaMatrizCabecaFinal')"
                    data-vv-name="vacaMatrizCabecaFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="vacaMatrizValor"
                    type="number"
                    background-color="white"
                    label="Valor R$/cab"
                    box
                    v-model="formulario.RebanhoDeReproducao.vacaMatrizValor"
                    v-validate="'required'"
                    :error-messages="errors.collect('vacaMatrizValor')"
                    data-vv-name="vacaMatrizValor"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
          </v-expansion-panel>

              <v-expansion-panel v-model="panel[2]" expand class="panel">
            <v-expansion-panel-content>
              <template v-slot:header>
                <h2>Dados Do Rebanho de Recria</h2>
              </template>

              
              
              <div class="divider2">
                <span>
                  <b>Fêmeas + 36 meses</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas36PesoInicial"
                    type="number"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas36PesoInicial')"
                    data-vv-name="femeas36PesoInicial"
                    background-color="white"
                    label="Peso(kg)Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas36PesoInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas36PesoFinal"
                    type="number"
                    background-color="white"
                    label="Peso(kg)Final"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas36PesoFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas36PesoFinal')"
                    data-vv-name="femeas36PesoFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md3>
                  <v-text-field
                    name="femeas36Valor"
                    type="number"
                    background-color="white"
                    label="Valor R$/Kg Vivo"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas36Valor"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas36Valor')"
                    data-vv-name="femeas36Valor"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas36CabecasInicial"
                    type="number"
                    background-color="white"
                    label="Cabecas-Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas36CabecasInicial"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas36CabecasInicial')"
                    data-vv-name="femeas36CabecasInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas36CabecasFinal"
                    type="number"
                    background-color="white"
                    label="Cabecas-Final"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas36CabecasFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas36CabecasFinal')"
                    data-vv-name="femeas36CabecasFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <div class="divider2">
                <span>
                  <b>Fêmeas 24-36 meses</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas2436PesoInicial"
                    type="number"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas2436PesoInicial')"
                    data-vv-name="femeas2436PesoInicial"
                    background-color="white"
                    label="Peso(kg)Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas2436PesoInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas2436PesoFinal"
                    type="number"
                    background-color="white"
                    label="Peso(kg)Final"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas2436PesoFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas2436PesoFinal')"
                    data-vv-name="femeas2436PesoFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md3>
                  <v-text-field
                    name="femeas2436Valor"
                    type="number"
                    background-color="white"
                    label="Valor R$/Kg Vivo"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas2436Valor"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas2436Valor')"
                    data-vv-name="femeas2436Valor"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas2436CabecasInicial"
                    type="number"
                    background-color="white"
                    label="Cabecas-Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas2436CabecasInicial"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas2436CabecasInicial')"
                    data-vv-name="femeas2436CabecasInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas2436CabecasFinal"
                    type="number"
                    background-color="white"
                    label="Cabecas-Final"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas2436CabecasFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas2436CabecasFinal')"
                    data-vv-name="femeas2436CabecasFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <div class="divider2">
                <span>
                  <b>Fêmeas 12-24 meses</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas1224PesoInicial"
                    type="number"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas1224PesoInicial')"
                    data-vv-name="femeas1224PesoInicial"
                    background-color="white"
                    label="Peso(kg)Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas1224PesoInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas1224PesoFinal"
                    type="number"
                    background-color="white"
                    label="Peso(kg)Final"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas1224PesoFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas1224PesoFinal')"
                    data-vv-name="femeas1224PesoFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md3>
                  <v-text-field
                    name="femeas1224Valor"
                    type="number"
                    background-color="white"
                    label="Valor R$/Kg Vivo"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas1224Valor"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas1224Valor')"
                    data-vv-name="femeas1224Valor"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas1224CabecasInicial"
                    type="number"
                    background-color="white"
                    label="Cabecas-Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas1224CabecasInicial"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas1224CabecasInicial')"
                    data-vv-name="femeas1224CabecasInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas1224CabecasFinal"
                    type="number"
                    background-color="white"
                    label="Cabecas-Final"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas1224CabecasFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas1224CabecasFinal')"
                    data-vv-name="femeas1224CabecasFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <div class="divider2">
                <span>
                  <b>Fêmeas 0-12 meses</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas012PesoInicial"
                    type="number"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas012PesoInicial')"
                    data-vv-name="femeas012PesoInicial"
                    background-color="white"
                    label="Peso(kg)Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas012PesoInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas012PesoFinal"
                    type="number"
                    background-color="white"
                    label="Peso(kg)Final"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas012PesoFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas012PesoFinal')"
                    data-vv-name="femeas012PesoFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md3>
                  <v-text-field
                    name="femeas012Valor"
                    type="number"
                    background-color="white"
                    label="Valor R$/Kg Vivo"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas012Valor"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas012Valor')"
                    data-vv-name="femeas012Valor"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas012CabecasInicial"
                    type="number"
                    background-color="white"
                    label="Cabecas-Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas012CabecasInicial"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas012CabecasInicial')"
                    data-vv-name="femeas012CabecasInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="femeas012CabecasFinal"
                    type="number"
                    background-color="white"
                    label="Cabecas-Final"
                    box
                    v-model="formulario.RebanhoDeRecria.femeas012CabecasFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('femeas012CabecasFinal')"
                    data-vv-name="femeas012CabecasFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <div class="divider2">
                <span>
                  <b>Machos 0-12 meses</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos012PesoInicial"
                    type="number"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos012PesoInicial')"
                    data-vv-name="machos012PesoInicial"
                    background-color="white"
                    label="Peso(kg)Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.machos012PesoInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos012PesoFinal"
                    type="number"
                    background-color="white"
                    label="Peso(kg)Final"
                    box
                    v-model="formulario.RebanhoDeRecria.machos012PesoFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos012PesoFinal')"
                    data-vv-name="machos012PesoFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md3>
                  <v-text-field
                    name="machos012Valor"
                    type="number"
                    background-color="white"
                    label="Valor R$/Kg Vivo"
                    box
                    v-model="formulario.RebanhoDeRecria.machos012Valor"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos012Valor')"
                    data-vv-name="machos012Valor"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos012CabecasInicial"
                    type="number"
                    background-color="white"
                    label="Cabecas-Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.machos012CabecasInicial"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos012CabecasInicial')"
                    data-vv-name="machos012CabecasInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos012CabecasFinal"
                    type="number"
                    background-color="white"
                    label="Cabecas-Final"
                    box
                    v-model="formulario.RebanhoDeRecria.machos012CabecasFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos012CabecasFinal')"
                    data-vv-name="machos012CabecasFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <div class="divider2">
                <span>
                  <b>Machos 12-24 meses</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos1224PesoInicial"
                    type="number"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos1224PesoInicial')"
                    data-vv-name="machos1224PesoInicial"
                    background-color="white"
                    label="Peso(kg)Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.machos1224PesoInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos1224PesoFinal"
                    type="number"
                    background-color="white"
                    label="Peso(kg)Final"
                    box
                    v-model="formulario.RebanhoDeRecria.machos1224PesoFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos1224PesoFinal')"
                    data-vv-name="machos1224PesoFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md3>
                  <v-text-field
                    name="machos1224Valor"
                    type="number"
                    background-color="white"
                    label="Valor R$/Kg Vivo"
                    box
                    v-model="formulario.RebanhoDeRecria.machos1224Valor"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos1224Valor')"
                    data-vv-name="machos1224Valor"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos1224CabecasInicial"
                    type="number"
                    background-color="white"
                    label="Cabecas-Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.machos1224CabecasInicial"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos1224CabecasInicial')"
                    data-vv-name="machos1224CabecasInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos1224CabecasFinal"
                    type="number"
                    background-color="white"
                    label="Cabecas-Final"
                    box
                    v-model="formulario.RebanhoDeRecria.machos1224CabecasFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos1224CabecasFinal')"
                    data-vv-name="machos1224CabecasFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <div class="divider2">
                <span>
                  <b>Machos 24-36 meses</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos2436PesoInicial"
                    type="number"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos2436PesoInicial')"
                    data-vv-name="machos2436PesoInicial"
                    background-color="white"
                    label="Peso(kg)Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.machos2436PesoInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos2436PesoFinal"
                    type="number"
                    background-color="white"
                    label="Peso(kg)Final"
                    box
                    v-model="formulario.RebanhoDeRecria.machos2436PesoFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos2436PesoFinal')"
                    data-vv-name="machos2436PesoFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md3>
                  <v-text-field
                    name="machos2436Valor"
                    type="number"
                    background-color="white"
                    label="Valor R$/Kg Vivo"
                    box
                    v-model="formulario.RebanhoDeRecria.machos2436Valor"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos2436Valor')"
                    data-vv-name="machos2436Valor"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos2436CabecasInicial"
                    type="number"
                    background-color="white"
                    label="Cabecas-Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.machos2436CabecasInicial"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos2436CabecasInicial')"
                    data-vv-name="machos2436CabecasInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos2436CabecasFinal"
                    type="number"
                    background-color="white"
                    label="Cabecas-Final"
                    box
                    v-model="formulario.RebanhoDeRecria.machos2436CabecasFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos2436CabecasFinal')"
                    data-vv-name="machos2436CabecasFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <div class="divider2">
                <span>
                  <b>Machos + 36 meses Iclusive Tourunos</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos36PesoInicial"
                    type="number"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos36PesoInicial')"
                    data-vv-name="machos36PesoInicial"
                    background-color="white"
                    label="Peso(kg)Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.machos36PesoInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos36PesoFinal"
                    type="number"
                    background-color="white"
                    label="Peso(kg)Final"
                    box
                    v-model="formulario.RebanhoDeRecria.machos36PesoFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos36PesoFinal')"
                    data-vv-name="machos36PesoFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md3>
                  <v-text-field
                    name="machos36Valor"
                    type="number"
                    background-color="white"
                    label="Valor R$/Kg Vivo"
                    box
                    v-model="formulario.RebanhoDeRecria.machos36Valor"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos36Valor')"
                    data-vv-name="machos36Valor"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos36CabecasInicial"
                    type="number"
                    background-color="white"
                    label="Cabecas-Inicial"
                    box
                    v-model="formulario.RebanhoDeRecria.machos36CabecasInicial"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos36CabecasInicial')"
                    data-vv-name="machos36CabecasInicial"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="machos36CabecasFinal"
                    type="number"
                    background-color="white"
                    label="Cabecas-Final"
                    box
                    v-model="formulario.RebanhoDeRecria.machos36CabecasFinal"
                    v-validate="'required'"
                    :error-messages="errors.collect('machos36CabecasFinal')"
                    data-vv-name="machos36CabecasFinal"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <div class="divider">
                <span>
                  <b>Rebanho Médio Anual Estimado</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="rebanhoMedioAnualEstimadoCabeca"
                    type="number"
                    background-color="white"
                    label="Cabeças"
                    box
                    v-model="formulario.rebanhoMedioAnualEstimadoCabeca"
                    
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm6 md2>
                  <v-text-field
                    name="rebanhoMedioAnualEstimadoUA"
                    type="number"
                    background-color="white"
                    label="UA"
                    box
                    v-model="formulario.rebanhoMedioAnualEstimadoUA"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-btn class="button" type="submit" color="primary">Visualizar Relatório !{{form}}</v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-form>
      </v-content>
    </v-container>
  </v-formulario>
</template>
<script>
import Formulario from "../class/Formulario.js";
import Dictionary from "../class/Dictionary.js";
export default {
  name: "formulario",

  $_veeValidate: {
    validator: "new"
  },

  data: () => ({
    formulario: new Formulario(),
    forme: "",
    panel: [0, 0, 0]
  }),
  computed: {
    form: function() {
      var db = new Dexie("simulacao");
      db.version(1).stores({
        simulacao: "id,formularioDB"
      });

      db.simulacao
        .get(1)
        .then(f => (this.formulario = new Formulario(f.formularioDB)));
    }
  },

  mounted() {
    this.$validator.localize("pt", new Dictionary());
  },

  methods: {
    grava() {
      this.$validator.validateAll().then(valid => {
        if (!valid) {
          alert("Verifique se todas as informações estão corretas");
        } else {
          var db = new Dexie("simulacao");
          db.version(1).stores({
            simulacao: "id,formularioDB"
          });

          db.simulacao
            .put({ id: 1, formularioDB: this.formulario })
            .then(function() {
              window.location.href = "/#/relatorio";
            });
        }
      });
    }
  }
};
</script>
<style scoped>
@media screen and (max-width: 991px) {
h2{
    color: #00695c;
  }
  .container {
    position: relative;
    text-align: center;

    background-color: #00695c;
    min-height: 100vh;
    max-width: none;

    color: azure;
  }

  .panel {
    margin-top: 1%;
    padding-bottom: 1%;
    background-color: white;
    box-shadow: 0 4px 15px black;
  }
  .form {
    margin-top: 2%;

    min-width: 100%;
  }
  .text-field {
    background-color: blue;
    font-size: 2px;
  }
  .flex {
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
  }
  .button {
    float: right;
  }
  .divider {
    text-align: center;
    font-size: 130%;
    color: #00695c;
  }
  .divider2 {
    margin-top: 5%;
    margin-left: 5%;
    font-size: 110%;
  }
}

@media screen and (min-width: 992px) {
  h2{
    color: #00695c;
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
  .panel {
    margin-top: 2%;
    padding-bottom: 1%;
    background-color: white;
    box-shadow: 0 4px 10px black;
  }
  .form {
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
    max-width: 70%;
    min-width: 50%;
  }
  .flex {
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
  }
  .button {
    float: right;
  }

  .divider {
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
}
</style>
