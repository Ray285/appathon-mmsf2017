angular.module('ps.component.user-info-card', [])
  .directive('userInfoCard', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        user: '=',
        doSomeManipulation: '='
      },
      templateUrl: 'user-list/components/user-info-card.tpl.html',
      controller: 'UserInfoCardCtrl as userInfoCard',
      bindToController: true
    }
  })
  .controller('UserInfoCardCtrl', function UserInfoCardCtrl() {
    var userInfoCard = this;
  })
;