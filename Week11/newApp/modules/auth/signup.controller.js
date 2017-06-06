angular.module("NewApp")
.controller('SignupController', SignupController);

function SignupController(Auth, $mdDialog,$location) {
	var vm = this;

	vm.signup = function (ev) {
		console.log("Signup", vm.user);
		Auth.signup(vm.user)
		.then(
			function success(res) {
			console.log("Success: ", res.data);
			alertDialog(ev, 'Signup successful!', 'Account ' + vm.user.username + ' created successfully, redirecting to LOGIN');
			$location.path('/login');
		},
			function error(res) {
			console.log("Error: ", res.data);
			alertDialog(ev, 'Signup failed!', 'Signup failed due and error: ' + res.data.message);

		});

	}

	function alertDialog(ev, title, text) {

		$mdDialog.show(
		$mdDialog.alert()
			.parent(angular.element(document.querySelector('#popupContainer')))
			.clickOutsideToClose(false)
			.title(title)
			.textContent(text)
			.ariaLabel('Accept')
			.ok('Okay!')
			.targetEvent(ev));

	}

}
