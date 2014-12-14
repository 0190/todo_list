/*globals todoList, $rootScope */

todoList.controller('ProjectsCtrl', [ '$scope', 'Projects', function ($scope, Projects) {
  $scope.projects = Projects.project_list;
  $scope.selected_project = Projects.selected_project;

  $scope.on_click = function (name) {
    //update Project.selected_project
    Projects.update_project(name);
  };

  $scope.add_project = function () {
    console.log('adding project');
  };

}]);