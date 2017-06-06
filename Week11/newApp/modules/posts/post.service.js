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

}
