var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when("/", {
    templateUrl: "main.html",
    controller: "IndexCtrl"
  })
  .when("/fizzbuzz", {
    templateUrl:"/fizzbuzz.html",
    controller: "FizzBuzzController"
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

app.directive('noTransclude', function() {
  return{
    template: '<div>Please select Reddit or Fizzbuzz</div>',
    replace: false 
  };
});

app.directive('yesTransclude', function() {
  return{
    transclude: true,
    template: '<div><ng-transclude/></div>', 
    replace: true
  };
});