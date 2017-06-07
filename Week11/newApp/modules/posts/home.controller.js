angular.module("NewApp").controller("HomeController", HomeController);
function HomeController($scope, $timeout, Auth, Post) {
	var vm = this;
	vm.name = Auth.name;
	console.log('home Controller')


	Post.getPosts()
	.then(
		function success(res) {
		console.log("Posts: " ,res.data)
		vm.posts = res.data;
		
	},
		function error(res) {});

}
