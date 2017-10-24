angular.module('project-seed', [
  'ps.user-profile',
  'ps.user-list',
  'ui.router',
  'project-seed.common',
  'ngAria',
  'angularMoment',
  'templates-app'
])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/users');
  })
;