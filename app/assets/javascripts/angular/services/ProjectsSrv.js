/*globals todoList, $rootScope */

todoList.factory('Projects', function ($rootScope) {
  var selected_project;
  var project_list = [
      {
        "name": "Project1",
        "tasks": [{'name': "task 1", 'done': false}, {'name': "task 2", 'done': false}, {'name': "task 3", 'done': false}]
      },
      {
        "name": "Project2",
        "tasks": [{'name': "pr2 task 1", 'done': false} , {'name': "pr2 task 2", 'done': false}, {'name': "pr3 task 3", 'done': false}]
      },
      {
        "name": "Something else",
        "tasks": [{'name': "task aa", 'done': false}, {'name': "task phh", 'done': false}]
      },
      {
        "name": "One more!",
        "tasks": [{'name': "get some rest", 'done': false}]
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
    _.where(project_list, {'name': project})[0].tasks.push({'name': task, 'done': false});
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