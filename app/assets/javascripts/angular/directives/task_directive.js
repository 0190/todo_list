/*globals todoList */

todoList.directive('task', function () {

  return {

    restrict: 'AE',

    scope: {
      index: '=',
      name: '@',
      completed: '='
    },

    template: "<div class='task'>" +
                "<input type='checkbox' ng-model='completed' id='{{index}}'>" +
                "<label for='{{index}}' ng-class='{strike: completed}'>" +
                  "<span ng-show='completed'>✓</span><span ng-hide='completed'></span>{{name}}" +
                "</label>" +
              "</div>"

  };

});