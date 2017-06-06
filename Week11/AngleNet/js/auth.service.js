angular.module('angleNet').service('Auth',Auth);

function Auth() {
	console.log('Auth Service is running');
	var vm = this;

	vm.name = "ブランドン";

}
