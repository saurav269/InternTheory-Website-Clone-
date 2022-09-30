// Import the Navbar
import { Navbar, sidebar } from "../components/navbar.js";
let navbar_me = document.getElementById("nav_bar");
navbar_me.innerHTML = Navbar();
let sidebar_nav = document.getElementById("sidebar");
sidebar_nav.innerHTML = sidebar();
// Import EMI details
import { EMI_func } from "../components/EMI.js";
// Import Footer
import { footer } from "../components/footer.js";

let boxes = document.querySelectorAll(".emi");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let div = document.createElement("div");
    div.id = "emi_box";
    // btn.addEventListener("click", () => {
    //   console.log("this");
    // });
    div.innerHTML = EMI_func();
    document.body.append(div);
  });
});

let box_cart = document.querySelectorAll(".add_course_cart");

box_cart.forEach((box) => {
  box.addEventListener("click", () => {
    let div = document.createElement("div");

    // btn.addEventListener("click", () => {
    //   console.log("this");
    // });
    box.innerHTML = "CHECKOUT";
    // let arr = localStorage.getItem(JSON.parse("data") || []);
    // arr.push("CHECKOUT");
    // localStorage.setItem("data", JSON.stringify(arr));
  });
});

// append footer
let footer_box = document.getElementById("footer_container");
footer_box.innerHTML = footer();

// sidebar functionality
let side = document.querySelector("#sidebar");

// let btn = document.querySelector("button");
let slider = document.getElementById("slider");
let closeBtn = document.getElementById("close");

slider.addEventListener("click", function () {
  side.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  side.style.display = "none";
});

let num = 1;
const course = () => {
  // console.log("working");
  if (num % 2 != 0) {
    num++;
    document.getElementById("opt1").style.display = "block";
    console.log("working ", num);
  } else {
    document.getElementById("opt1").style.display = "none";
    num++;
    console.log("working", num);
  }
};

let num1 = 1;
const register = () => {
  if (num1 % 2 != 0) {
    num1++;
    document.getElementById("reg").style.display = "block";
    console.log("working ", num1);
  } else {
    document.getElementById("reg").style.display = "none";
    num1++;
    console.log("working", num1);
  }
};
let num2 = 1;
const login = () => {
  if (num2 % 2 != 0) {
    num2++;
    document.getElementById("log").style.display = "block";
    console.log("working ", num2);
  } else {
    document.getElementById("log").style.display = "none";
    num2++;
    console.log("working", num2);
  }
};
