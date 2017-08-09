var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when("/", {
    templateUrl: "main.html",
    controller: "IndexCtrl"
  })
  .when("/fizzbuzz", {
    templateUrl:"/fizzbuzz.html",
    controller: "FizzBuzzControl"
  })
  .when("/reddit", {
    templateUrl:"/reddit.html",
    controller: "RedditCtrl"
  })
  .otherwise({
      redirectTo: "/index"
    });

    $locationProvider.hashPrefix("");
  });
