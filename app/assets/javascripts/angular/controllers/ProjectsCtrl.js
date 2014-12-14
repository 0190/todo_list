/*globals todoList, $rootScope, prompt */

todoList.controller('ProjectsCtrl', [ '$scope', 'Projects', function ($scope, Projects) {
  $scope.projects = Projects.project_list;
  $scope.selected_project = Projects.selected_project;

  $scope.on_click = function (name) {
    Projects.update_project(name);
  };

  // Adding projects
  $scope.add_project = function () {
    var name = prompt('Enter the name of the project:');
    Projects.add_project(name);
  };

}]);