var angleNet = angular.module("angleNet", ['ngRoute']);

angleNet.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/stream', [
    //getting an unexpected syntax error right here.
    templateUrl: 'view/stream.html'
  ])
  .when('/profile', [
    templateUrl: 'view/profile.html'

  ]).otherwise([
    redirectto: '/stream'
  ])
}]);
