angular.module('myTwitter')
  .factory('twitterFactory', ['$http', function($http) {
    return {
      getUser: function() {
        return $http.get('/user');
      },
      getTweets: function(txtSearch) {
        return $http.get('/tweets/' + txtSearch);
      }
    }
  }])
