var angleNet = angular.module("angleNet").controller("LoginController", LoginController);

function LoginController($scope) {
  $scope.loginClicked = function() {
    var login = "bjld";
    if ($scope.loginF.userAtempt === login) {
      var userId = "bjld";
      document.getElementById('loginConfirmed').innerHTML = "You are now loged in!";
    } else {
      console.log("Wrong username");
      console.log("User attempted: " + $scope.loginF.userAtempt);
    }
    console.log(userId);
    console.log(login);
  }
}
