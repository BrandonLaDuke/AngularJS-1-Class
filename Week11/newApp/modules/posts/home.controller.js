angular.module("NewApp").controller("HomeController", HomeController);
function HomeController($scope, $timeout, Auth, Post) {
	var vm = this;
	vm.name = Auth.name;
	console.log('home Controller')

	Post.getRes()
	.then(function successCallback(res) {

		// this callback will be called when we get a successful response (HTTP status 200s: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes )
		console.log("We just got the succesful response back!");
		console.log(res);
		vm.res = res.data;

	}, function errorCallback(res) {

		// this callback will be called when we get a problematic response (HTTP status 400s and 500s)
		console.log("There was a problem!");
		console.log(res);

	});
	var payload = {
		data: "Hello!"
	};
	Post.echo(payload).then(function success(res) {
		console.log(res.data)
	}, function error(res) {
		console.log(res)
	});

	Post.helpApi()
	.then(function successCallback(res) {
		console.log(res.data);
	});

	//This is undefined because we don't have the response yet!
	//Javascript is running all the lines after each other, except for the http promise (then function) which is happenning upon getting any response back from the server.
	console.log("This is running lexically after function getRes from Post service", vm.res);

}
