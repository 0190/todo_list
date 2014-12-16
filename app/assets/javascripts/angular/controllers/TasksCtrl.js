/*globals todoList, prompt, alert*/

todoList.controller('TasksCtrl', [ '$scope', 'Projects', function ($scope, Projects) {
  $scope.selected_project = Projects.get_project();
  $scope.tasks = [];

  $scope.show = function () {
    console.log(!!$scope.selected_project);
  };

  // Update task list when a new project is selected (or current project is deleted, setting selected_project to undefined)
  $scope.$on('Update', function () {
    $scope.selected_project = Projects.get_project();
    if (!$scope.selected_project) {
      $scope.tasks = [];
    } else {
      $scope.tasks = _.where(Projects.project_list, { 'name': $scope.selected_project })[0].tasks;
    }
  });

  // Add tasks
  $scope.add_task = function (description) {
    if ($scope.selected_project) {
      Projects.add_task_to_project($scope.selected_project, description);
    } else {
      alert('Please choose a project first.');
    }
  };
}]);