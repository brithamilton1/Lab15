var app = angular.module('myApp');

    app.controller('FizzBuzzController', function ($scope) {
      $scope.fizzbuzz = fizzbuzz;
      
      function fizzbuzz(){
       if ($scope.input % 15 === 0) {
         console.log('fizz buzz')
        }
        else if ($scope.input % 3 === 0) {
          console.log('fizz')
        }
        else if ($scope.input % 5 === 0) {
          console.log('buzz')
        }else{
          console.log('i love dogs')
        }
      }
    });

      


