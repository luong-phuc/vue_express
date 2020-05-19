import Vue from 'vue'
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

  static async getUserList(search) {
    let url = Vue.config.HOST_API + '/api/user'

    if(search) {
      url = url + '?s=' + encodeURI(search)
    }
    
    return await Vue.axios.get(url)
  }

  static async getUserById(id) {
    let url = Vue.config.HOST_API + '/api/user/' + encodeURI(id)
    
    return await Vue.axios.get(url)
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
