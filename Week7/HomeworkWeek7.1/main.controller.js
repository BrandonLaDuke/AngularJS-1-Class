angular.module("BCM").controller("MainController", MainController);

function MainController($scope) {
  $scope.outputArray = [];
  $scope.input = {firstname:"Brandon", lastname: "LaDuke", logo:"http://brandonladuke.com/images/logo.svg", bussnessname:"BJLaDuke Productions", address:"1234 Road", phone:"+1-502-219-2553", email:"brandon@brandonladuke.com", bkg:"var(--card-bkg)", color: "var(--txt-white)"};
  $scope.contentInput = "";

  $scope.saveClicked = function() {
    var temp = angular.copy($scope.input);
    $scope.outputArray.push(temp);
  }
}
