angular.module('angleNet').service('Auth',Auth);

function Auth() {
	console.log('Auth Service is running');
	var vm = this;

	vm.name = "ブランドン";

  vm.signup = function(userInfo) {
    console.log("Auth Signup", userInfo);
    $http.post('http://mydailypanel.com:8383/api/signup', userInfo);
  }
}
