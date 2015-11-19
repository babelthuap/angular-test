'use strict';

angular.module("twitterApp", []) // 2nd arg is array of dependencies
.constant('VARS', { // configure constants
  MAX_CHARS: 140
})
.controller("tweetForm", function($scope, VARS) { // controller scope

  // $scope.tweet = ''; // sets the model 'tweet' which is used in the template

  $scope.tweets = [
    {text: 'Tweet 1', fav: false},
    {text: 'Tweet 2', fav: false},
    {text: 'Tweet 3', fav: false}
  ];

  $scope.charsRemaining = function() { // can also define fns on the scope
    return VARS.MAX_CHARS - $scope.tweet.length;
  }

  $scope.invalidTweet = function() {
    return $scope.charsRemaining() < 0 || $scope.tweet.length === 0;
  };

  $scope.addTweet = function(newTweet) {
    $scope.tweets.unshift({text: newTweet, fav: false});
    $scope.tweet = '';
  }

  $scope.deleteTweet = function(index) {
    $scope.tweets.splice(index, 1);
  }

  $scope.favorite = function(index) {
    $scope.tweets[index].fav = !$scope.tweets[index].fav;
  }

})


// ################ jQuery business ###################################

// var cade = 'hello';

// $(document).ready(function() {

//   $('#a-button').click(doThing);

//   function doThing() {
//     console.log('a thing');
//   }


//   $('[data-model=cade]').text(cade);


//   // 2-way data binding
//   $('#cade').on('input', function() {
//     cade = this.value; // bind model to view
//     $('[data-model=cade]').text(cade); // 1/2-bind view to model 
//   })
//   setInterval(function() {
//     $('[data-model=cade]').text(cade); // complete bind view to model
//   }, 1);

// });
