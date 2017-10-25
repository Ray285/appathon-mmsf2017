angular.module('ps.user-list', [
  'ui.router',
  'ps.component.user-info-card'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userList', {
        url: '/users',
        templateUrl: 'user-list/user-list.tpl.html',
        controller: 'UserListCtrl as userList'
      })
  })
  .controller('UserListCtrl', function UserListCtrl($http, userListModel, $state) {
    var userList = this;
    userList.callCityIQ = function() {
      console.log('city-iq called!');
      const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJiM2MxOGRhOTU1NjY0ODY2YmY1ZGE4MzQzMDkwNTQyOCIsInN1YiI6ImhhY2thdGhvbiIsInNjb3BlIjpbInVhYS5yZXNvdXJjZSIsImllLWN1cnJlbnQuU0RTSU0tSUUtUFVCTElDLVNBRkVUWS5JRS1QVUJMSUMtU0FGRVRZLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtRU5WSVJPTk1FTlRBTC5JRS1FTlZJUk9OTUVOVEFMLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtVFJBRkZJQy5JRS1UUkFGRklDLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtUEFSS0lORy5JRS1QQVJLSU5HLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtUEVERVNUUklBTi5JRS1QRURFU1RSSUFOLkxJTUlURUQuREVWRUxPUCJdLCJjbGllbnRfaWQiOiJoYWNrYXRob24iLCJjaWQiOiJoYWNrYXRob24iLCJhenAiOiJoYWNrYXRob24iLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjlmMWYyYzRkIiwiaWF0IjoxNTA4ODcxNTM0LCJleHAiOjE1MDk0NzYzMzQsImlzcyI6Imh0dHBzOi8vODkwNDA3ZDctZTYxNy00ZDcwLTk4NWYtMDE3OTJkNjkzMzg3LnByZWRpeC11YWEucnVuLmF3cy11c3cwMi1wci5pY2UucHJlZGl4LmlvL29hdXRoL3Rva2VuIiwiemlkIjoiODkwNDA3ZDctZTYxNy00ZDcwLTk4NWYtMDE3OTJkNjkzMzg3IiwiYXVkIjpbImllLWN1cnJlbnQuU0RTSU0tSUUtVFJBRkZJQy5JRS1UUkFGRklDLkxJTUlURUQiLCJpZS1jdXJyZW50LlNEU0lNLUlFLVBBUktJTkcuSUUtUEFSS0lORy5MSU1JVEVEIiwiaWUtY3VycmVudC5TRFNJTS1JRS1QVUJMSUMtU0FGRVRZLklFLVBVQkxJQy1TQUZFVFkuTElNSVRFRCIsInVhYSIsImhhY2thdGhvbiIsImllLWN1cnJlbnQuU0RTSU0tSUUtRU5WSVJPTk1FTlRBTC5JRS1FTlZJUk9OTUVOVEFMLkxJTUlURUQiLCJpZS1jdXJyZW50LlNEU0lNLUlFLVBFREVTVFJJQU4uSUUtUEVERVNUUklBTi5MSU1JVEVEIl19.iImpLfQyIdW0miunXEF7KtxVDOvY45PzZgccXQigG2YOLR-6OhMc_H11SG1MjBlfoQoCvDXNDOs6o8dquW7zfSQDhmSdSsDMk2q8BzcIb-kWIhOAcSYZts_o-KTkIVMzuhWt-2B76KKAM73rTsJEg4NuBdI3N8Lg5a5reLhAKslEtWvc6zMjaqDoEhpIDqKk0Cc3r-79edV737OtZZnFK465qmRg8E3ZTlYm13uJgjdV4CCoyewgSr7x_qrkAy_vqOI0ZB37HclgG7W8GcYtEqeFNq0WRvbtP5ilogfa3Giri-G8trD0zz9yJbHmmZv8MPsGm7iDEbiw67tKaLXpHw";

      const url = "https://ic-metadata-service.run.aws-usw02-pr.ice.predix.io/v2/metadata/assets/search";
      const bearer = `Bearer ${token}`;
      const options = {
          params: {
            bbox: '32.715675:-117.161230,32.708498:-117.151681',
            page: 0,
            size: 200,
            q: 'assetType:CAMERA AND eventTypes:PEDEVT'
          },
          headers: {
              "Authorization": bearer,
              "Predix-Zone-Id": 'SDSIM-IE-TRAFFIC'
          }
      };

      console.log('options:', options);

      $http.get(url, options)
      .then(function(data) {
        console.log('call made!');
        console.log(data);
      });
    }

    userList.callCityIQ();

    userListModel.getUsers().then(function(users) {
      userList.users = users;
    });

    userList.doSomeManipulation = function(user) {
      $state.go('userProfile', {username: user.login});
    }
  })
;
