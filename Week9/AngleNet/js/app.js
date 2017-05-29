var angleNet = angular.module("angleNet", ['ngRoute']);

angleNet.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/stream', [
    templateUrl: 'view/stream.html'
  ])
  .when('/profile', [
    templateUrl: 'view/profile.html'

  ]).otherwise([
    redirectto: '/stream'
  ])
}]);
