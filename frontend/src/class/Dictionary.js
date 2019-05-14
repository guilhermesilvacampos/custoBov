export default class Dictionary{

    constructor(){
        return{
            custom: {
                ano: {
                  required: () => "O Campo Ano não deve ser vazio",
                  date_format:() => "Digite um ano válido Ex: 2019"
                },
                fazenda: {
                  required: () => "O Campo Fazenda não deve ser vazio"
                },
                municipio: {
                  required: () => "O Campo Municipio não deve ser vazio"
                },
                touroPesoMedio:{
                  required: () => "O Campo Peso Médio kg/cab não deve ser vazio"
                },
                touroCabecaInicial:{
                  required: () => "O Campo Cabeças-Inicial não deve ser vazio"
                },
                touroCabecaFinal:{
                  required: () => "O Campo Cabeças-Final não deve ser vazio"
                },
                touroValor:{
                  required: () => "O Campo Valor R$/cab não deve ser vazio"
                },
                vacaMatrizPesoMedio:{
                  required: () => "O Campo Peso Médio kg/cab não deve ser vazio"
                },
                vacaMatrizCabecaInicial:{
                  required: () => "O Campo Cabeças-Inicial não deve ser vazio"
                },
                vacaMatrizCabecaFinal:{
                  required: () => "O Campo Cabeças-Final não deve ser vazio"
                },
                vacaMatrizValor:{
                  required: () => "O Campo Valor R$/cab não deve ser vazio"
                },
                femeas36PesoInicial:{
                  required: () => "O Campo Peso(kg)Inicial não deve ser vazio"
                },
                femeas36PesoFinal:{
                  required: () => "O Campo Peso(kg)Final não deve ser vazio"
                },
                femeas36Valor:{
                  required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio"
                },
                femeas36CabecasInicial:{
                  required: () => "O Campo Cabeças-Inicial não deve ser vazio"
                },
                femeas36CabecasFinal:{
                  required: () => "O Campo Cabeças-Final não deve ser vazio"
                },
                femeas2436PesoInicial:{
                  required: () => "O Campo Peso(kg)Inicial não deve ser vazio"
                },
                femeas2436PesoFinal:{
                  required: () => "O Campo Peso(kg)Final não deve ser vazio"
                },
                femeas2436Valor:{
                  required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio"
                },
                femeas2436CabecasInicial:{
                  required: () => "O Campo Cabeças-Inicial não deve ser vazio"
                },
                femeas2436CabecasFinal:{
                  required: () => "O Campo Cabeças-Final não deve ser vazio"
                },
                femeas1224PesoInicial:{
                  required: () => "O Campo Peso(kg)Inicial não deve ser vazio"
                },
                femeas1224PesoFinal:{
                  required: () => "O Campo Peso(kg)Final não deve ser vazio"
                },
                femeas1224Valor:{
                  required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio"
                },
                femeas1224CabecasInicial:{
                  required: () => "O Campo Cabeças-Inicial não deve ser vazio"
                },
                femeas1224CabecasFinal:{
                  required: () => "O Campo Cabeças-Final não deve ser vazio"
                },
                femeas012PesoInicial:{
                  required: () => "O Campo Peso(kg)Inicial não deve ser vazio"
                },
                femeas012PesoFinal:{
                  required: () => "O Campo Peso(kg)Final não deve ser vazio"
                },
                femeas012Valor:{
                  required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio"
                },
                femeas012CabecasInicial:{
                  required: () => "O Campo Cabeças-Inicial não deve ser vazio"
                },
                femeas012CabecasFinal:{
                  required: () => "O Campo Cabeças-Final não deve ser vazio"
                },
                machos012PesoInicial:{
                  required: () => "O Campo Peso(kg)Inicial não deve ser vazio"
                },
                machos012PesoFinal:{
                  required: () => "O Campo Peso(kg)Final não deve ser vazio"
                },
                machos012Valor:{
                  required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio"
                },
                machos012CabecasInicial:{
                  required: () => "O Campo Cabeças-Inicial não deve ser vazio"
                },
                machos012CabecasFinal:{
                  required: () => "O Campo Cabeças-Final não deve ser vazio"
                },

                machos1224PesoInicial:{
                  required: () => "O Campo Peso(kg)Inicial não deve ser vazio"
                },
                machos1224PesoFinal:{
                  required: () => "O Campo Peso(kg)Final não deve ser vazio"
                },
                machos1224Valor:{
                  required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio"
                },
                machos1224CabecasInicial:{
                  required: () => "O Campo Cabeças-Inicial não deve ser vazio"
                },
                machos1224CabecasFinal:{
                  required: () => "O Campo Cabeças-Final não deve ser vazio"
                },

                machos2436PesoInicial:{
                  required: () => "O Campo Peso(kg)Inicial não deve ser vazio"
                },
                machos2436PesoFinal:{
                  required: () => "O Campo Peso(kg)Final não deve ser vazio"
                },
                machos2436Valor:{
                  required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio"
                },
                machos2436CabecasInicial:{
                  required: () => "O Campo Cabeças-Inicial não deve ser vazio"
                },
                machos2436CabecasFinal:{
                  required: () => "O Campo Cabeças-Final não deve ser vazio"
                }, 

                machos36PesoInicial:{
                  required: () => "O Campo Peso(kg)Inicial não deve ser vazio"
                },
                machos36PesoFinal:{
                  required: () => "O Campo Peso(kg)Final não deve ser vazio"
                },
                machos36Valor:{
                  required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio"
                },
                machos36CabecasInicial:{
                  required: () => "O Campo Cabeças-Inicial não deve ser vazio"
                },
                machos36CabecasFinal:{
                  required: () => "O Campo Cabeças-Final não deve ser vazio"
                },
                rebanhoMedioAnualEstimadoCabeca:{
                  required: () => "O Campo Cabeças não deve ser vazio"
                },
                rebanhoMedioAnualEstimadoUA:{
                  required: () => "O Campo UA não deve ser vazio"
                },
                femeas36PesoMedioKGVivo1:{
                  required: () => "O Campo Peso Medio kg vivo não deve ser vazio"
                },
                femeas2436PesoMedioKGVivo1:{
                  required: () => "O Campo Peso Medio kg vivo não deve ser vazio"
                },
                femeas1224PesoMedioKGVivo1:{
                  required: () => "O Campo Peso Medio kg vivo não deve ser vazio"
                },
                femeas012PesoMedioKGVivo1:{
                  required: () => "O Campo Peso Medio kg vivo não deve ser vazio"
                },
                machos012PesoMedioKGVivo1:{
                  required: () => "O Campo Peso Medio kg vivo não deve ser vazio"
                },
                machos1224PesoMedioKGVivo1:{
                  required: () => "O Campo Peso Medio kg vivo não deve ser vazio"
                },
                machos2436PesoMedioKGVivo1:{
                  required: () => "O Campo Peso Medio kg vivo não deve ser vazio"
                },
                machos36PesoMedioKGVivo1:{
                  required: () => "O Campo Peso Medio kg vivo não deve ser vazio"
                },
                touroPesoMedioKGVivo1:{
                  required: () => "O Campo Peso Medio kg vivo não deve ser vazio"
                },

                femeas36cabeca1:{
                  required: () => "O Campo Peso Medio cab. não deve ser vazio"
                },

                femeas2436cabeca1:{
                  required: () => "O Campo Peso Medio cab. não deve ser vazio"
                },
                femeas1224cabeca1:{
                  required: () => "O Campo Peso Medio cab. não deve ser vazio"
                },
                femeas012cabeca1:{
                  required: () => "O Campo Peso Medio cab. não deve ser vazio"
                },
                machos012cabeca1:{
                  required: () => "O Campo Peso Medio cab. não deve ser vazio"
                },
                machos1224cabeca1:{
                  required: () => "O Campo Peso Medio cab. não deve ser vazio"
                },
                machos2436cabeca1:{
                  required: () => "O Campo Peso Medio cab. não deve ser vazio"
                },
                machos36cabeca1:{
                  required: () => "O Campo Peso Medio cab. não deve ser vazio"
                },
                tourocabeca1:{
                  required: () => "O Campo Peso Medio cab. não deve ser vazio"
                },


                femeas36ValorUnitarioRSCabeca:{
                  required: () => "O Campo Valor (R$/cab) não deve ser vazio" 
                },
                femeas2436ValorUnitarioRSCabeca:{
                  required: () => "O Campo Valor (R$/cab) não deve ser vazio" 
                },
                femeas1224ValorUnitarioRSCabeca:{
                  required: () => "O Campo Valor (R$/cab) não deve ser vazio" 
                },
                femeas012ValorUnitarioRSCabeca:{
                  required: () => "O Campo Valor (R$/cab) não deve ser vazio" 
                },
                machos012ValorUnitarioRSCabeca:{
                  required: () => "O Campo Valor (R$/cab) não deve ser vazio" 
                },
                machos1224ValorUnitarioRSCabeca:{
                  required: () => "O Campo Valor (R$/cab) não deve ser vazio" 
                },
                machos2436ValorUnitarioRSCabeca:{
                  required: () => "O Campo Valor (R$/cab) não deve ser vazio" 
                },
                machos36ValorUnitarioRSCabeca:{
                  required: () => "O Campo Valor (R$/cab) não deve ser vazio" 
                },
                touroValorUnitarioRSCabeca:{
                  required: () => "O Campo Valor (R$/cab) não deve ser vazio" 
                },


                femeas36PesoMedioKGVivo:{
                  required: () => "O Campo Peso Medio kg vivo não deve ser vazio"
                },
                femeas2436PesoMedioKGVivo:{
                  required: () => "O Campo Peso Medio kg vivo não deve ser vazio"
                },
                femeas1224PesoMedioKGVivo:{
                  required: () => "O Campo Peso Medio kg vivo não deve ser vazio"
                },
                machos1224PesoMedioKGVivo:{
                  required: () => "O Campo Peso Medio kg vivo não deve ser vazio"
                },
                machos2436PesoMedioKGVivo:{
                  required: () => "O Campo Peso Medio kg vivo não deve ser vazio"
                },
                machos36PesoMedioKGVivo:{
                  required: () => "O Campo Peso Medio kg vivo não deve ser vazio"
                },

                femeas36cabeca:{
                  required: () => "O Campo Peso Medio cab. não deve ser vazio"
                },
                femeas2436cabeca:{
                  required: () => "O Campo Peso Medio cab. não deve ser vazio"
                },
                femeas1224cabeca:{
                  required: () => "O Campo Peso Medio cab. não deve ser vazio"
                },
                machos1224cabeca:{
                  required: () => "O Campo Peso Medio cab. não deve ser vazio"
                },
                machos2436cabeca:{
                  required: () => "O Campo Peso Medio cab. não deve ser vazio"
                },
                machos36cabeca:{
                  required: () => "O Campo Peso Medio cab. não deve ser vazio"
                },


                femeas36PesoMedioCarcaca:{
                  required: () => "O Campo Peso Medio Carcaça não deve ser vazio"
                },
                femeas2436PesoMedioCarcaca:{
                  required: () => "O Campo Peso Medio Carcaça não deve ser vazio"
                },
                femeas1224PesoMedioCarcaca:{
                  required: () => "O Campo Peso Medio Carcaça não deve ser vazio"
                },
                machos1224PesoMedioCarcaca:{
                  required: () => "O Campo Peso Medio Carcaça não deve ser vazio"
                },
                machos2436PesoMedioCarcaca:{
                  required: () => "O Campo Peso Medio Carcaça não deve ser vazio"
                },
                machos36PesoMedioCarcaca:{
                  required: () => "O Campo Peso Medio Carcaça não deve ser vazio"
                },


                
                femeas36ValorUnitarioRS:{
                  required: () => "O Campo Valor (R$/cab) não deve ser vazio" 
                },
                femeas2436ValorUnitarioRS:{
                  required: () => "O Campo Valor (R$/cab) não deve ser vazio" 
                },
                femeas1224ValorUnitarioRS:{
                  required: () => "O Campo Valor (R$/cab) não deve ser vazio" 
                },
                machos1224ValorUnitarioRS:{
                  required: () => "O Campo Valor (R$/cab) não deve ser vazio" 
                },
                machos2436ValorUnitarioRS:{
                  required: () => "O Campo Valor (R$/cab) não deve ser vazio" 
                },
                machos36ValorUnitarioRS:{
                  required: () => "O Campo Valor (R$/cab) não deve ser vazio" 
                },
                
                



                


        } 
    }
    
}
}