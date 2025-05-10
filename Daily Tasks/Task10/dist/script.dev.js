"use strict";

function f1() {
  fetch("https://dummyjson.com/products/1").then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
  });
}