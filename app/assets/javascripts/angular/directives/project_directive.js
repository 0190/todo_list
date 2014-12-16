/*globals todoList */

todoList.directive('project', function () {

  return {

    restrict: 'AE',

    scope: {
      name: '@',
      select: '&',
      delete: '&'
    },

    template: '<div title="Delete project" class="btn" ng-click="delete(name)">&ndash;</div>' +
              '<div class="project" ng-click="select(name)">{{name}}</div>'

  };

});