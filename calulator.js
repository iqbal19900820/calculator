function getValue(n) {
  a = document.getElementById("display");
  a.value += n;
}

function solve() {
  a = document.getElementById("display");
  a.value = eval(a.value);
}

function ac() {
  a = document.getElementById("display");
  a.value = "";
}

function del() {
  a = document.getElementById("display");
  a.value = a.value.slice(0, -1);
}
