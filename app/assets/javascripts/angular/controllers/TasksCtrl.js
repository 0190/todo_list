/*globals todoList*/

todoList.controller('TasksCtrl', [ '$scope', 'Projects', function ($scope, Projects) {
  $scope.selected_project = Projects.get_project();
  $scope.tasks = [];
  $scope.$on('Update', function () {
    $scope.selected_project = Projects.get_project();
    $scope.tasks = _.where(Projects.project_list, { 'name': $scope.selected_project })[0].tasks;
  });
}]);