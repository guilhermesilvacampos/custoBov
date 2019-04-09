export default class Dictionary{

    constructor(){
        return{
            custom: {
                ano: {
                  required: () => "Campo Ano não deve ser vazio"
                },
                fazenda: {
                  required: () => "Campo Fazenda não deve ser vazio"
                },
                municipio: {
                  required: () => "Campo Municipio não deve ser vazio"
                },
                touroPesoMedio:{
                  required: () => "Campo Peso Médio não deve ser vazio"
                },
                touroCabecaInicial:{
                  required: () => "Campo Cabeça Inicial não deve ser vazio"
                }
        } 
    }
    
}
}