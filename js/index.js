let form = document.getElementById("form");
let nome = document.getElementById("name");
let password = document.getElementById("password");
let tel = document.getElementById("tel");

nome.addEventListener("input", () => {
  if (nome.value.match(/\d/)) {
    nome.style.backgroundColor = "#ffbeb7";
  } else if (nome.value == "") {
    nome.style.backgroundColor = "initial";
  } else {
    nome.style.backgroundColor = "#e3f3e7";
  }
});

password.addEventListener("input", () => {
  if (password.value.length <= 8) {
    password.style.backgroundColor = "#ffbeb7";
  } else if (password.value == "") {
    password.style.backgroundColor = "initial";
  } else {
    password.style.backgroundColor = "#e3f3e7";
  }
});

password.addEventListener("input", () => {
  if (password.value.length <= 8) {
    password.style.backgroundColor = "#ffbeb7";
  } else if (password.value == "") {
    password.style.backgroundColor = "initial";
  } else {
    password.style.backgroundColor = "#e3f3e7";
  }
});

tel.addEventListener("input", () => {
  if (tel.value.length < 11) {
    tel.style.backgroundColor = "#ffbeb7";
  } else if (tel.value == "") {
    tel.style.backgroundColor = "initial";
  } else {
    tel.style.backgroundColor = "#e3f3e7";
  }
});


