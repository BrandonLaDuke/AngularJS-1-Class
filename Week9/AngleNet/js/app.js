var angleNet = angular.module('angleNet', ['ngRoute']);

angleNet.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home', [
    templateUrl: 'views/home.html'
  ])
}]);
