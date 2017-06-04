var angleNet = angular.module("angleNet").controller("MainController", MainController);

function MainController($scope) {
  $scope.outputArray = [];
  $scope.input = {name:"Brandon LaDuke", picture:"http://brandonladuke.com/images/Me.jpg", postText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", bkg:"var(--post-head-bkg)"};
  $scope.contentInput = "";


  $scope.saveClicked = function() {
    var temp = angular.copy($scope.input);
    $scope.outputArray.push(temp);
    SavePost();
  }

  function SavePost(name, imageUrl, content, bkgColor) {
    var userId = "bjld";
    var name = $scope.input.name;
    var imageUrl = $scope.input.picture;
    var content = $scope.input.postText;
    var bkgColor = $scope.input.bkg;
    console.log(name);
    console.log(imageUrl);
    var newPostKey = firebase.database().ref().child('posts').push().key;
    firebase.database().ref('users/' + userId + '/post' + newPostKey).set({
      username: name,
      profile_picture: imageUrl,
      postText: content,
      backgroundColor: bkgColor
    });
  }

}
