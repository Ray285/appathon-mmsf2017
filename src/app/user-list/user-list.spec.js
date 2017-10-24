describe('userListCtrl', function() {
  var userListCtrl,
    userListModel;

  beforeEach(module('ps.user-list'));

  beforeEach(inject(function($controller) {
    userListModel = {
      getUsersWasCalled: false,
      getUsers: function () {
        this.getUsersWasCalled = true;
        return {
          then: function (callback) {
            callback([]);
          }
        }
      }
    };
    userListCtrl = $controller('UserListCtrl', {
      userListModel: userListModel
    });
  }));

  it('should create an instance', function() {
    expect(userListCtrl).toBeDefined();
  });

  it('should call getUsers on userListModel when instantiated', function() {
    expect(userListModel.getUsersWasCalled).toBe(true);
  });

  it("should set the users property when getUser returns a value", function () {
    expect(userListCtrl.users).toBeDefined();
  });
});