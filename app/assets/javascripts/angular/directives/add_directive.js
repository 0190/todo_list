/*globals todoList*/

todoList.directive('todoadd', function () {

  return {

    restrict: 'AE',

    scope: {

      name: '=',
      add: '&'

    },

    template: '<form class="add-form" ng-submit="add(name)">' +
                '<button type="submit" title="Add" class="add-btn">+</button><input type="text" ng-model="name">' +
              '</form>'

  };

});