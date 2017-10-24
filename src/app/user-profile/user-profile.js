angular.module('ps.user-profile', [
  'ui.router',
  'ps.user-events',
  'ps.user-repos'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userProfile', {
        url: '/users/:username',
        templateUrl: 'user-profile/user-profile.tpl.html',
        controller: 'UserProfileCtrl as userProfile'
      })
  })

  .controller('UserProfileCtrl', function UserProfileCtrl($http, baseApiUrl, $stateParams) {
    var userProfile = this;
    $http.get(baseApiUrl + '/users/' + $stateParams.username).then(function(result) {
      userProfile.user = result.data;
    })
  })
;