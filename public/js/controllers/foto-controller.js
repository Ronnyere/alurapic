// não pode usar o segundo parâmetro (dependências) porque senão cria um novo módulo
angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){
    $scope.foto = {};
    $scope.mensagem = '';

    /* chamo o fotoId passado o routeParams passado uma funcion e 
    aciono o arquivo main.js onde defino um coringa  passando o Id no caso (fotoId) */
    if($routeParams.fotoId){
        $http.get('v1/fotos/' + $routeParams.fotoId)
        .success(function(foto){
            $scope.foto = foto;
        })
        .error(function(erro){
            console.log(erro);
            $scope.mensagem = 'Não foi possivel obter a foto';
        })
    }

    // verifica se passou pelas validações antes de salvar
    $scope.submeter = function(){        
        if ($scope.formulario.$valid){
            if($scope.foto._id){
               $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
               .success(function(){
                $scope.mensagem = 'A foto' + $scope.foto.titulo + 'foi alterada com sucesso';

               })
               .error(function(){
                console.log(erro);
                $scope.mensagem = 'Não foi possivel alterar a foto' + $scope.foto.titulo; 

                 });

            } else {

            $http.post('v1/fotos', $scope.foto)
                .success(function(){
                $scope.mensagem = 'Foto cadastrada com sucesso';
                $scope.foto = {};
            })
                .error(function(erro){
                $scope.mensagem = 'Ocorreu um erro ao cadastrar a foto';
            });

            }
        }
    };

});