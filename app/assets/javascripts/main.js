var todoList = angular.module('todo_list', [])

todoList.config(function ($routeProvider) {
  $routeProvider
  	.when('/',
  	{
      templateUrl: '../templates/home.html',
      controller: 'MainCtrl'
    }) 
})