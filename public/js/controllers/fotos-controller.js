// public/js/controllers/fotos-controller.js

// $scope - injeção de dependência
// com isso é possível enviar para fora da function os valores
// O Angular sabe o que deve buscar de sua infraestrutura 
// de acordo com o nome do parâmetro que recebemos em nosso controller
// $http - executa funções http

angular.module('alurapic').controller('FotosController', function($scope, $http){
    $scope.fotos = [];

    // Toda requisição assíncrona é incerta, não sabemos quanto tempo 
    // ela demorará para ser executada e se realmente será bem sucedida.
    // $http.get nos retorna uma promessa de que ele buscará os dados
    // na requisição: http://localhost:3000/v1/fotos

    // quando a "promessa" for cumprida, podemos ter acesso aos dados
    // retornados do servidor:
    /*    
    var promise = $http.get('/v1/fotos');

    promise.then(function(retorno){
        $scope.fotos = retorno.data;        
    }).catch(function(erro){
        console.log(erro);
    })
    */

    // Adiciona a propriedade que captura o texto digitado
    // AngularJS só lê, não consegue alterar as informações
    // do DDO. Para fazer isso, utilizamos um two-way databind,
    // que torna possível ler o texto no $scope.
    // Precisa também usar a diretiva ng-model no html
    $scope.filtro = '';
    $scope.mensagem='';

    $http.get('v1/fotos')
        .success(function(fotos) {
        $scope.fotos = fotos;  
    })
        .error(function(erro) {
        console.log(erro);
    });

   /*Neste $scope criamos uma função  que chama um http delete passando o objeto foto como uma id*/
    $scope.remover = function(foto){
        $http.delete('v1/fotos/' +foto._id)
        .success(function(){
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto,1);
            $scope.mensagem = 'Foto' + foto.titulo + 'foi removida com sucesso';
        })
        .error(function(erro){
            console.log(erro);
            $scope.mensagem = 'Não foi possivel remover a foto' + foto.titulo;
        });
    };    
});