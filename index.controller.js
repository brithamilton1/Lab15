var app = angular.module("myApp");

app.controller("IndexCtrl", function($scope, RedditFactory){
  RedditFactory.getPosts()
    .then(function(result){
        Console.log(result)
    })
    .catch(function(error){
      $scope.error = "there was an error getting posts"
    });
});
