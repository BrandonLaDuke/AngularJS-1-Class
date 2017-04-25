angular.module('input', []);
angular.module('input').controller('FirstController', show)

function input($scope) {
 // var user = document.getElementById('user').value;
 // alert(user);
 $scope.show = function() {
   alert($scope.input);
 }
}
