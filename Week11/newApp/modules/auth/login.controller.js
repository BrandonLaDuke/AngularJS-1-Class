angular.module("NewApp")
.controller('LoginController', LoginController);

function LoginController(Auth, $mdDialog, $location) {
	var vm = this;

	vm.login = function (ev) {
		console.log("Login", vm.user);
		Auth.login(vm.user)
		.then(
			function success(res) {
			console.log("Success: ", res.data);
			alertDialog(ev, 'Login successful! Redirecting to your Stream');
			$location.path('/home');
		},
			function error(res) {
			console.log("Error: ", res.data);
			alertDialog(ev, 'Login failed!', 'Login failed due and error: ' + res.data.message);

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
