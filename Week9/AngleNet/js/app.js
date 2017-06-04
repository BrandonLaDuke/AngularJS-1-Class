var angleNet = angular.module("angleNet", ['ngRoute']);

angleNet.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
  .when('/stream', {
    //getting an unexpected syntax error right here.
    templateUrl: 'view/stream.html'
  })
  .when('/profile', {
    templateUrl: 'view/profile.html'

  }).when('/about', {
    templateUrl: 'view/about.html'

  }).otherwise('/stream');
}]);

var database = firebase.database();
