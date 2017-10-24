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
  .controller('UserListCtrl', function UserListCtrl(userListModel, $state) {
    var userList = this;

    userListModel.getUsers().then(function(users) {
      userList.users = users;
    });

    userList.doSomeManipulation = function(user) {
      $state.go('userProfile', {username: user.login});
    }
  })
;