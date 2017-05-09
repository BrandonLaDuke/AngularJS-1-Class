


//css whitespace: pre-line; Fixes any no space problems with the display of text

//ng-repeat="post in posts"

angular.module('myApp',  ['ngAria', 'ngAnimate', 'ngMessages', 'ngMaterial']);

angular.module('myApp').controller('FirstController', inputText);

function userInput($scope, $log, $filter, $timeout){

	console.log("it works");

	$scope.post = function post(){

	console.log("pst it works");
	$scope.inputText = angular.copy($scope.inputText);

	//how to make userTextCopy appear in a form
	//how to keep previous values of userTextCopy

	}
}
