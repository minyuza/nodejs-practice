"use strict";

class UserStorage {
  static #users = {
    id: ["a", "b", "c"],
    password: ["1234", "4321", "2345"],
    name: ["YJ", "YH", "JJ"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const index = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUsers, info) => {
      newUsers[info] = users[info][index];
      return newUsers;
    }, {});
    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    return { success: true };
  }
}

module.exports = UserStorage;
