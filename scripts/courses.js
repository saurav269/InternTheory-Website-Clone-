// Import the Navbar

// Import EMI details
import { EMI_func } from "../components/EMI.js";
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
// document.append(EMI_func());
// EMI functionality;
// let func = () => {
//   //   body.append(EMI_func);
//   console.log("this");
// };
