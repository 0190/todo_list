/*globals todoList, prompt, alert*/

todoList.controller('TasksCtrl', [ '$scope', 'Projects', function ($scope, Projects) {
  $scope.selected_project = Projects.get_project();
  $scope.tasks = [];

  // Display project name if chosen
  $scope.title = function () {
    if ($scope.selected_project) {
      return 'for ' + $scope.selected_project;
    }
    return '(choose project)';
  };

  // Update task list when a new project is selected
  $scope.$on('Update', function () {
    $scope.selected_project = Projects.get_project();
    $scope.tasks = _.where(Projects.project_list, { 'name': $scope.selected_project })[0].tasks;
  });

  // Add tasks
  $scope.add_task = function () {
    if ($scope.selected_project) {
      var description = prompt('Add task:');
      Projects.add_task_to_project($scope.selected_project, description);
    } else {
      alert('Please choose a project first.');
    }
  };
}]);