/*globals todoList */

todoList.directive('check', function () {

  return {

    restrict: 'E',

    scope: {
      completed: '='
    },

    template: "<input type='checkbox' ng-model='completed'>"

  };

});