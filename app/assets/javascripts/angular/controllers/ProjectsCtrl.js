/*globals todoList, $rootScope, prompt */

todoList.controller('ProjectsCtrl', [ '$scope', 'Projects', function ($scope, Projects) {
  $scope.projects = Projects.project_list;
  $scope.selected_project = Projects.selected_project;

  $scope.$on('Update', function () {
    $scope.selected_project = Projects.get_project();
  });

  $scope.on_click = function (name) {
    Projects.select_project(name);
  };

  // Add projects
  $scope.add_project = function (name) {
    //var name = prompt('Enter the name of the project:');
    if (name) {
      Projects.add_project(name);
    }
  };

  // Delete projects
  $scope.delete_project = function (name) {
    Projects.delete_project(name);
    Projects.select_project(undefined);
  };

}]);