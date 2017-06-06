angular.module('NewApp').service('Auth',Auth);

function Auth($http){
	console.log('Auth Service is running');
	var vm = this;

	vm.name = "Babak";
	$http.post('http://mydailypanel.com:8383/api/user',{sessionId:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU2ZThhYWRhZDcxNWQ5NDQwYjM3ODY0YiIsIm5hbWUiOiJCYWJhayIsImZpcnN0TmFtZSI6ImRkZGRkIiwibGFzdE5hbWUiOiJBYmJhc2NoaWFuIiwidXNlcm5hbWUiOiJiYWJhayIsImltYWdlIjoiaHR0cHM6Ly9jZG4uMzdpbWcuY29tL2dsb2JhbC81YTc4MTk5NDM4YmE4NTU0YzBlNzI4ZWRjOGI2ZTIwMDAwMTAvYXZhdGFyLjk2LmdpZiIsImlhdCI6MTQ5NjQ2MjE1NX0.vFTp-rgy9eOMboz0BQDaBTs9XBQBW88bPnAb1MMBT70"})
	.then(function(res){
		console.log(res.data);

		});


	vm.signup = function(userInfo){
		console.log("Auth Signup", userInfo);
		return $http.post('http://mydailypanel.com:8383/api/signup',userInfo);

	}

	vm.login = function (userInfo) {
		console.log("Auth Login", userInfo);
		return $http.post('http://mydailypanel.com:8383/api/login', userInfo);
	}

}
