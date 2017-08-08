var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when("/", {
    templateUrl: "index.html",
    controller: "IndexCtrl"
  })
  .when("/fizzbuzz.html", {
    templateUrl:"/fizzbuzz.html",
    controller: "FizzBuzzControl"
  })
  .when("/reddit.html", {
    templateUrl:"/reddit.html",
    controller: "RedditCtrl"

  .otherwise({
      redirectTo: "/index"
    });

    $locationProvider.hashPrefix("");
  });
