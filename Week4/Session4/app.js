angular.module('myApp',[]);

angular.module('myApp').controller('FirstController',control);

function control($scope) {
  console.log("test");
  $scope.login = function() {
    if ($scope.user=='admin'&&$scope.password=='123') {
      $scope.show=true;
    } else {
      $scope.show=false;
    }
  }

  $scope.add = function() {
    console.log("add");
    $scope.c = $scope.a + $scope.b;
  }
};
