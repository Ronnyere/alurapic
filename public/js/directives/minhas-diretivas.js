// public/js/directives/minhas-diretivas.js

// criando nossa própria diretiva
// diretivas são componentes reutilizáveis

angular.module('minhasDiretivas', [])
// no nome da diretiva do Angular = 'meuPainel'
// quando for utilizar: meu-painel no html:
// <meu-painel titulo="{{teste.titulo}}"></meu-painel>
    .directive('meuPainel', function(){
    // a função deve sempre retornar um directive definition object (DDO):
    var ddo = {};

    // A diretiva pode ser utilizada como Attribute | Element | Comment
    ddo.restrict = "AE";

    // cada diretiva tem contexto proprio, sem interferir na outra
    // escopo privado ddo.scope
    // valor do mundo externo, recebido como cópia e com mesmo nome
    // é recebido como string
    // quando o nome do atributo é igual ao da propriedade, pode usar @
    ddo.scope = {
        titulo: '@'         
    };

    // serve para que o DOM seja manipulado corretamente
    // e mantenha os elementos filhos
    // sem isso, não tem como trocar a url da imagem nesse exemplo
    // --> precisa dizer qual tag vai manter o elemento filh
    // fazemos isso usando a diretiva ng-transclude na div
    ddo.transclude = true;

    // utiliza o template separado em um arquivo html
    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;    
});