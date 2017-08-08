angular.module('fizzbuzz', [])


    .factory("Counter", function() {
      var increment = function() {
        service.number++;
        if (service.number % 15 === 0) {

          service.display = "FIZZBUZZ"
        }
        else if (service.number % 3 === 0) {
          service.display =  "FIZZ"
        }
        else if (service.number % 5 === 0) {
          service.display =  "BUZZ"
        }else{
          service.display = service.number
        }
      }
      var service = {
        increment: increment,
        number:0,
        display: 'Click to start'
      }
      return service;
    })

    .controller("FizzBuzzController", function($scope, Counter) {

      $scope.Counter = Counter;
    })
