const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  // Implement 1 test for the *add* function that verifies a user that is not in the users' list.

test('adds user that is not in the user list', () => {
  let user = new User(5432, "kesh", "kesh@mail.com");
  userController.add(user);
  expect(userController.users).toContain(user);

});

//Implement 1 test for the *remove* function that verifies a user that is not in the users' list.

test('remove user that is not in the user list', () => {
  let user= new User(7462, 'tasbia', 'tasbia@mail.com');
  userController.remove(user);
  expect(userController.remove(user)).toBe(undefined);
});

//. Implement 2 unit tests for the *findByEmail* functio
test('find user by email ', () => {
  userController.findByEmail('kesh@mail.com');
  expect(userController.findByEmail('kesh@mail.com')).toEqual({"email": "kesh@mail.com", "id": 5432, "name": "kesh"});
});

test('find user by email ', () => {
  let user= new User(7462, 'tasbia', 'tasbia@mail.com');
  userController.add(user);
  userController.findByEmail('tasbia@mail.com');
  expect(userController.findByEmail('tasbia@mail.com')).toEqual({"email": "tasbia@mail.com", "id": 7462, "name": "tasbia"});
});
// two unit test to find by Id

test('find user by Id ', () => {
 
  userController.findById(7462);
  expect(userController.findById(7462)).toEqual({"email": "tasbia@mail.com", "id": 7462, "name": "tasbia"});
});

test('find user by email ', () => {
  userController.findById(5432);
  expect(userController.findById(5432)).toEqual({"email": "kesh@mail.com", "id": 5432, "name": "kesh"});
});





