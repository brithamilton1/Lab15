var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when("/", {
    templateUrl: "index.html",
    controller: "IndexCtrl"
  })
  .when("/", {
    templateUrl:"fizzbuzz/fizzbuzz.html",
    controller: "FizzBuzzCtrl"
  })
  .when("/", {
    templateUrl:"/reddit.html",
    controller: "RedditCtrl"

  .otherwise({
      redirectTo: "/index"
    });

    $locationProvider.hashPrefix("");
  });
