angular
.module('myTwitter', ['ui.bootstrap', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider, $interpolateProvider) {
  $interpolateProvider.startSymbol('//').endSymbol('//');
  $urlRouterProvider.otherwise('/home');
  // home
  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        "content": {
          templateUrl: 'public/components/templates/home/home.html',
          controller: 'homeController'
        }
      }
    })
    .state('search', {
      url: '/search',
      views: {
        "content": {
          templateUrl: 'public/components/templates/search/search.html'
        }
      }
    })
});
