import User from "../models/user"

class UserService {

  static users() {
    let users = []

    users.push(new User({
      id: "001",
      fullName: "Luong Phuc",
      email: "luong.phuc@mulodo.com",
      password: null
    }))

    users.push(new User({
      id: "004",
      fullName: "Luong Phuc",
      password: null
    }))

    users.push(new User({
      id: "002",
      fullName: "Luong Vinh",
      email: "luong.vinh@mulodo.com",
      password: null
    }))

    users.push(new User({
      id: "003",
      fullName: "Luong Minh"
    }))

    return users
  }

  static getUserList(search){
    let users = this.users()

    if(!search) {
      return users
    }

    return _.filter(users, {fullName: search});
  }

  static getUserById(id) {
    let users = this.users()

    if(!id) {
      return new User()
    }

    return _.find(users, (u) => u.id == id);
  }

  static createUser(user) {
    console.log(new User(user))
    console.log("Create success.")
  }

  static updateUser(user) {
    console.log(new User(user))
    if(!user.id) {
      console.log("Can't update user : " + user)
    }
    console.log("Update success.")
  }
}

export default UserService
