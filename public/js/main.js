// public/js/main.js
// módulo principal da aplicação.
// a função module recebe dois parâmetros:
// O primeiro é o nome do módulo que desejamos criar e 
// o segundo é um array com todos os módulos de que nosso módulo depende. 
// Mesmo que não haja dependências, esse parâmetro não pode ser omitido

// ngRoute - módulo que faz a configuração de rotas

angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])

//  Para configurar o sistema de rotas, ngRoute é pré-requisito
//  para que possa receber o $routeProvider por injeção de dependências
//  Por padrão, a url precisa ter '#' antes do nome da rota
//  $locationProvider - ativa a utilização do HTML5
    .config(function($routeProvider, $locationProvider){

    // habilita a utilização de HMTL5, para que não precise colocar # na URL
    // precisar colocar <base href="/"> na página inicial
    // obs: poderia usar <base href="/nomeApp">
    $locationProvider.html5Mode(true);

    // http://localhost:3000/fotos
    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

    // http://localhost:3000/fotos/new
    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    // http://localhost:3000/fotos/edit
    $routeProvider.when('/fotos/edit/:fotoId', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    // se o usuário informar uma rota que não existe, vai para um default
    $routeProvider.otherwise({ redirectTo: '/fotos'});
});