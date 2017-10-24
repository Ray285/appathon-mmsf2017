angular.module('ps.user-repos', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('userProfile.repos', {
        url: '/repos',
        templateUrl: 'user-profile/repos/user-repos.tpl.html',
        controller: 'UserReposCtrl as userRepos'
      })
  })

  .controller('UserReposCtrl', function() {
    var userRepos = this;

    console.log("hello user repos");
  })
;