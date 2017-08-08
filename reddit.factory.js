var app = angular.module("myApp");

app.factory('RedditFactory', function($http){
  var postData = null;

  return {
    getPosts: getPosts,
  };
  function getPosts (){

    if(postData){

      return Promise.resolve(postData);
    }
  

    return $http.get('https://www.reddit.com/r/aww/.json')
      .then(function(response){
        postData = response.data.data.children;
        return postData;
     })
  }
  });