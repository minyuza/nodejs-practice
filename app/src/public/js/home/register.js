"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const name = document.querySelector("#name");
const confirmPassword = document.querySelector("#confirm-password");
const button = document.querySelector("#button");

button.addEventListener("click", register);

function register() {
  if (!id.value) return alert("아이디를 입력해주세요.");
  if (password.value !== confirmPassword.value) {
    return alert("비밀번호 일치X");
  }
  const req = {
    id: id.value,
    password: password.value,
    name: name.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  }).then((res) =>
    res
      .json()
      .then((res) => {
        if (res.success) {
          location.href = "/login";
        } else {
          alert(res.message);
        }
      })
      .catch((err) => {
        console.error(new Error("에러 발생"));
      })
  );
}
