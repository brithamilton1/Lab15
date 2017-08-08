var app = angular.module("myApp");

app.controller('RedditCtrl', function($scope, RedditFactory){

  RedditFactory.getPosts()
    .then(function(data){
      $scope.redditPosts = data;
    })
    .catch(function(error){
      $scope.error = 'There was an error getting data!';
    });


});