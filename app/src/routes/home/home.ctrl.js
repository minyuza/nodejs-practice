"use strict";

const users = {
  id: ["a", "b", "c"],
  password: ["1234", "4321", "2345"],
};

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const password = req.body.password;

    if (users.id.includes(id)) {
      console.log(users.id.indexOf(id));
      if (users.password.includes(password)) {
        console.log(users.password.indexOf(password));
      }
    }
    return res.json({
      success: false,
      message: "로그인 실패",
    });
  },
};

module.exports = {
  output,
  process,
};
