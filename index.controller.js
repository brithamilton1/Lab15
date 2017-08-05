var app = angular.module("myApp");
<<<<<<< HEAD
=======

app.controller("IndexCtrl", function($scope, RedditFactory){
  RedditFactory.getPosts()
    .then(function(result){
        Console.log(result)
    })
    .catch(function(error){
      $scope.error = "there was an error getting posts"
    });
});
>>>>>>> 58cdcca644f49f54625efa2e25d546f79d2b23a1
