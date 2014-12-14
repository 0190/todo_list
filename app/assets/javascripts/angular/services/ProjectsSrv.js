/*globals todoList, $rootScope */

todoList.factory('Projects', function ($rootScope) {
  var selected_project;
  var project_list = [
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
    ];

  var get_project = function () {
    return selected_project;
  };

  var select_project = function (project) {
    selected_project = project;
    $rootScope.$broadcast('Update');
  };

  var add_project = function (project) {
    project_list.push({'name': project, "tasks": [] });
    select_project(project);
  };

  var add_task_to_project = function (project, task) {
    _.where(project_list, {'name': project})[0].tasks.push(task);
  };

  var delete_project = function (project) {
    _.remove(project_list, function (el) { return el.name === project; });
  };

  return {
    get_project: get_project,
    select_project: select_project,
    add_project: add_project,
    add_task_to_project: add_task_to_project,
    delete_project: delete_project,
    project_list: project_list
  };
});