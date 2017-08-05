var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when("/index", {
    templateUrl: "index.html",
    controller: "IndexCtrl"
  })
  .when("/", {
    templateUrl:"fizzbuzz/fizzbuzz.html",
    controller: "FizzBuzzCtrl"
  })
  .otherwise({
      redirectTo: "/index"
    });

    $locationProvider.hashPrefix("");
  });
