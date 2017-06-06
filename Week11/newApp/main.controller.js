angular.module("NewApp").controller("MainController", MainController);

function MainController($scope){
	$scope.outputArray =[];

	$scope.input={title:"Test Title", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan tellus ultrices, consequat arcu id, sodales velit. Suspendisse laoreet vel augue porta dignissim. Integer sed tortor orci. Phasellus mauris est, cursus eget consectetur quis, rhoncus et elit. Vivamus porta pellentesque nisi, a tempus lacus commodo a. Vestibulum congue nulla vel laoreet pretium. In hac habitasse platea dictumst. Quisque eleifend sed tellus a egestas. In est erat, tempor nec accumsan non, mattis non tellus. Aliquam et ligula lacinia, sollicitudin leo ut, bibendum lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse id gravida felis, et dapibus felis. Fusce a convallis justo. Vivamus volutpat consectetur ornare. Sed tincidunt orci id dui aliquet semper. Sed id ullamcorper purus, ac porttitor diam. Duis imperdiet nunc at elit convallis posuere. Suspendisse eu commodo turpis. In nec sapien sed dolor bibendum viverra ac id quam. Suspendisse dictum nunc diam, quis auctor tellus elementum non. Nam id ipsum lacus. Nulla non rhoncus nibh. Integer risus est, suscipit nec magna at, aliquet tempor tortor. Donec volutpat purus in augue placerat tempor. Donec convallis, risus vulputate auctor luctus, nisl lectus tincidunt velit, a porttitor dui nulla in dolor."};
	$scope.saveClicked = function(){

		var temp = angular.copy($scope.input);
		console.log(temp);
		$scope.outputArray.push(temp);


	}

}
