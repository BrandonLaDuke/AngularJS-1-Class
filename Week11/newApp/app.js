angular.module("NewApp", ['ngRoute', 'ngAnimate', 'ngAria', 'ngMessages', 'ngMaterial']);
angular.module("NewApp").config(routeConfig);

function routeConfig($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/signup', {
		templateUrl: "modules/auth/signup.html",
		controller:'SignupController',
		controllerAs:'vm'
	})
	.when('/login', {
		templateUrl: "modules/auth/login.html",
		controller:'LoginController',
		controllerAs:'vm'
	})
	.when('/profile', {
		templateUrl: "modules/posts/profile.html",
		controller: "ProfileController",
		controllerAs: "vm"

	})
	.when('/home', {
		templateUrl: "modules/posts/home.html",
		controller: "HomeController",
		controllerAs: "vm"

	})
	.when('/404', {
		templateUrl: "partialViews/p404.html"

	})
	.otherwise('/404');

}
