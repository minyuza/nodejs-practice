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
}

module.exports = UserStorage;
