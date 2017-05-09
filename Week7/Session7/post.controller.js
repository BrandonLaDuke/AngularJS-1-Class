angular.module("NewApp").controller("PostController", PostController);

function PostController($scope) {
  var i = 0;
  $scope.star = function() {
    $scope.color = "red";
  }
}
