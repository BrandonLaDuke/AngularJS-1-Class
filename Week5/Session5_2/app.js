angular.module('blog', []);
angular.module('blog').controller('FirstController', postText)

function postText($scope) {
 // var user = document.getElementById('user').value;
 // alert(user);
 $scope.postText = function() {

   document.getElementById('thepost').innerHTML = $scope.post;
 }
}
