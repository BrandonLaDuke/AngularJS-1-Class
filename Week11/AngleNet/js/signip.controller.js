angular.module("angleNet").controller'SignupController', signupController);

function SignupController(Auth) {
  var vm = this;
  vm.signup = function() {
    console.log("Signup");
    Auth.signup(vm.user).then(
    function success(res) {
      console.log("Success: ", res.data);
    },
    function error(res) {
      console.log();
    }
  )
  }
}
