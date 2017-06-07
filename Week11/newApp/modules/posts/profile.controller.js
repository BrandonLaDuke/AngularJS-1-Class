angular.module("NewApp").controller("ProfileController", ProfileController);

function ProfileController($scope, $log, Auth, Post){
	console.log("Profile Controller");
	var vm = this;
	vm.name= Auth.name;
	vm.number=0;
	vm.posts=Post.getPosts();
	vm.post = function(post){
		console.log("save", post);
		Post.addPost(post);
		vm.posts=Post.getPosts();
	}


	$scope.$on("$destroy",function(){

		console.log("I'm getting killed helllllppppppp!")

	});


}
