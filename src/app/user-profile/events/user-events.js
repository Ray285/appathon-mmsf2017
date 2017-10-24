angular.module('ps.user-events', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('userProfile.events', {
        url: '/events',
        templateUrl: 'user-profile/events/user-events.tpl.html',
        controller: 'UserEventsCtrl as userEvents'
      })
  })
  .controller('UserEventsCtrl', function UserEventsCtrl($http, baseApiUrl, $stateParams) {
    var userEvents = this;
    console.log('hello events ctrl', $stateParams);

    $http.get(baseApiUrl + '/users/' + $stateParams.username + '/events')
      .then(function(result) {
        userEvents.events = result.data;
      })
  })
;