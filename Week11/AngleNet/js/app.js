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

  }).when('/contact', {
    templateUrl: 'view/contact.html'

  }).when('/about', {
    templateUrl: 'view/about.html'

  }).when('/signup', {
    templateUrl: 'view/signup.html'
    
  }).when('/login', {
    templateUrl: 'view/login.html'

  }).otherwise('/stream');
}]);
