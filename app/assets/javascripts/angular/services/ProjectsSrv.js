/*globals todoList, $rootScope */

todoList.factory('Projects', function ($rootScope) {
  var selected_project;

  var get_project = function () {
    return selected_project;
  };

  var update_project = function (name) {
    selected_project = name;
    $rootScope.$broadcast('Update');
  };

  return {
    get_project: get_project,
    update_project: update_project,
    project_list: [
      {
        "name": "Project1",
        "tasks": ["task 1", "task 2", "task 3"]
      },
      {
        "name": "Project2",
        "tasks": ["pr2 task 1", "pr2 task 2", "pr3 task 3"]
      },
      {
        "name": "Something else",
        "tasks": ["task aa", "task phh"]
      },
      {
        "name": "One more!",
        "tasks": ["get some rest"]
      }
    ]
  };
});