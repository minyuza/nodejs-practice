"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#id");
const button = document.querySelector("button");

button.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    password: password.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
}
