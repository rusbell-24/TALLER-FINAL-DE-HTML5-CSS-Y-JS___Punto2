let fruit = [
  "Manzana",
  "Banano",
  "Pera",
  "Guayaba",
  "Piña",
  "Mango",
  "Sandia",
  "Papaya",
  "Uva",
  "Naranja",
];

let container = document.getElementById("container");

let ol = document.createElement("ol");

load();

container.appendChild(ol);

fruit.forEach((element, index) => {
  if ((index + 1) % 2 == 0) {
    let li = document.createElement("li");
    li.innerHTML = element;
    li.className = "fruit pair";
    ol.appendChild(li);
  } else {
    let li = document.createElement("li");
    li.innerHTML = element;
    li.className = "fruit odd";
    ol.appendChild(li);
  }
});

const changeMode = () => {
  const modes = document.getElementById("modes");
  const body = document.querySelector("body");
  switch (modes.value) {
    case "normal": {
      body.classList.remove("clear", "dark");
      body.classList.add("normal");
      break;
    }
    case "clear": {
      body.classList.remove("normal", "dark");
      body.classList.add("clear");
      break;
    }
    case "dark": {
      body.classList.remove("normal", "clear");
      body.classList.add("dark");
      break;
    }
  }
  localStorage.setItem("mode", modes.value);
};

function load() {
  const modes = document.getElementById("modes");
  const mode = localStorage.getItem("mode");
  const body = document.querySelector("body");
  if (mode) {
    switch (mode) {
      case "normal": {
        body.classList.remove("clear", "dark");
        body.classList.add("normal");
        selectedValue = "normal";
        break;
      }
      case "clear": {
        body.classList.remove("normal", "dark");
        body.classList.add("clear");
        selectedValue = "clear";
        break;
      }
      case "dark": {
        body.classList.remove("normal", "clear");
        body.classList.add("dark");
        selectedValue = "dark";
        break;
      }
    }
    document.querySelector(
      '#modes [value="' + selectedValue + '"]'
    ).selected = true;
  }
}
