

todoList.controller('ProjectsCtrl', [ '$scope', function ($scope) {
	$scope.projects = [
		{'name': 'Project 1', 'tasks': '[task1, task2]'},
		{'name': 'Project 2', 'tasks': '[task1, task2]'}
	];
}]);