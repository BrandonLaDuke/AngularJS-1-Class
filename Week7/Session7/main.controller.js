angular.module("NewApp").controller("MainController", MainController);

function MainController($scope) {
  $scope.outputArray = [];
  $scope.input = {title:"Test Title", color: "blue", content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."};
  $scope.contentInput = "";

  $scope.saveClicked = function() {
    var temp = angular.copy($scope.input);
    $scope.outputArray.push(temp);
  }
}
