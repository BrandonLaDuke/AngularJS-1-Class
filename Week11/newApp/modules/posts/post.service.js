angular.module('NewApp').service('Post', Post);

function Post($http) {
	var vm = this;

	var posts = [];

	vm.getPosts = function () {

		return angular.copy(posts);

	}

	vm.addPost = function (post) {

		posts.push(angular.copy(post));
		console.log(posts);

	}

	vm.getRes = function () {
		console.log("getRes in Post service is running");
		return $http.get('http://mydailypanel.com:8383/api/whoareyou',{timeout:3000});
	}
	vm.echo = function (data) {

		return $http.post('http://mydailypanel.com:8383/api/echo', data);
	}

	//This function is getting a help document from API which is discussing all the currently available functions in the API
	vm.helpApi = function () {
		return $http.get('http://mydailypanel.com:8383/api/helpapi');
	}
	
	vm.getPosts = function () {
	return $http.post('http://mydailypanel.com:8383/api/readposts',{sessionId:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU2ZThhYWRhZDcxNWQ5NDQwYjM3ODY0YiIsIm5hbWUiOiJCYWJhayIsImZpcnN0TmFtZSI6ImRkZGRkIiwibGFzdE5hbWUiOiJBYmJhc2NoaWFuIiwidXNlcm5hbWUiOiJiYWJhayIsImltYWdlIjoiaHR0cHM6Ly9jZG4uMzdpbWcuY29tL2dsb2JhbC81YTc4MTk5NDM4YmE4NTU0YzBlNzI4ZWRjOGI2ZTIwMDAwMTAvYXZhdGFyLjk2LmdpZiIsImlhdCI6MTQ5NjQ2MjE1NX0.vFTp-rgy9eOMboz0BQDaBTs9XBQBW88bPnAb1MMBT70"});
	}

}
