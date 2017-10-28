angular.module('myTwitter')
  .controller('homeController', ['$rootScope', '$scope', 'twitterFactory', function($rootScope, $scope, twitterFactory) {
    // Gets User
    twitterFactory.getUser().then(function(response) {
      $scope.user = response.data.user;
    })

    $scope.isSearch = false;
    $scope.searchResults = [];
    $scope.btnSearch = function() {
      console.log('Search', $scope.txtSearch);
      twitterFactory.getTweets($scope.txtSearch).then(function(response) {
        console.log(response);
        $scope.searchResults = response.data;
        $scope.isSearch = true;
      })
    }
  }])
