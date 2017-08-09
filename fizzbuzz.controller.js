angular.module('myApp', [])

    .controller("FizzBuzzController", function($scope) {
       if (input % 15 === 0) {
         console.log('fizz buzz')
        }
        else if (input % 3 === 0) {
          console.log('fizz')
        }
        else if (input % 5 === 0) {
          console.log('buzz')
        }else{
          console.log('i love dogs')
        }
      }

    });
