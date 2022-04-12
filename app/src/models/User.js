"use strict";

const UserStorage = require("./UserStorage");
class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const { id, password } = UserStorage.getUserInfo(body.id);
    if (id) {
      if (id === body.id && password === body.password) {
        return { success: true };
      }
      return { success: false, message: "비번 틀림" };
    }
    return { success: false, message: "아이디 존재 X" };
  }
}

module.exports = User;
