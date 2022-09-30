let Navbar = () => {
  return ` <div id="nav_log">
    <i class="fa-solid fa-bars nav_ham" id="slider"></i>
    <img
      id="navimg"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8RE3l71VRCm23ci33-wBI5lLx7hwhghecXza9lao&s"
      alt=""
    />
  </div>
  <div id="signin">
    <i class="fa-solid fa-cart-shopping"></i>
    <a href="">
      <h4 id="s1">SignIn</h4>
    </a>
  </div>`;
};

let sidebar = () => {
  return `<div class="logo_content">
    <div class="logo">
      <i class="fa-solid fa-bars close" id="close"></i>
      <img
        id="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8RE3l71VRCm23ci33-wBI5lLx7hwhghecXza9lao&s"
        alt=""
      />
      <div class="logo_name"></div>
    </div>
  </div>
  <ul class="nav_list">
    <li>
      <a href="#">
        <i class="fa-solid fa-house"></i>
        <span class="links_name"><b>Home</b></span>
      </a>
    </li>

    <li>
      <a href="#">
        <i class="fa-solid fa-list"></i>
        <span class="links_name"><b>Internships</b></span>
      </a>
    </li>

    <li>
      <a href="#">
        <i class="fa-solid fa-bag-shopping"></i>
        <span class="links_name"><b>Jobs</b></span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa-solid fa-list-check"></i>
        <span class="links_name"><b>Post Internship</b></span>
      </a>
    </li>
    <li>
      <a href="#" onclick="course()">
        <i class="fa-solid fa-mobile"></i>
        <span class="links_name"><b>Courses</b></span>
        <i id="ar1" class="fa-solid fa-angle-down"></i>
      </a>
    </li>
    <ul class="course">
      <a href="#" id="opt1">
        <li><b>Online Courses</b></li>
        <li><b>Classroom Traning</b></li>
      </a>
    </ul>
    <li>
      <a href="#">
        <i class="fa-solid fa-phone"></i>
        <span class="links_name"><b>Contact Us</b></span>
      </a>
    </li>
    <li class="register" onclick="register()">
      <a href="#">
        <i class="fa-solid fa-align-left"></i>
        <span class="links_name"><b>Register</b></span>
        <i id="ar2" class="fa-solid fa-angle-down"></i>
      </a>
    </li>
    <ul id="reg" class="how">
      <li class="opt"><b>Company</b></li>
      <li class="opt"><b>Student</b></li>
    </ul>
    <li onclick="login()">
      <a href="#">
        <i class="fa-solid fa-book"></i>
        <span class="links_name"><b>Login</b></span>
        <i id="ar3" class="fa-solid fa-angle-down"></i>
      </a>
    </li>
    <ul id="log" class="how">
      <li class="opt"><b>Company</b></li>
      <li class="opt"><b>Student</b></li>
    </ul>
  </ul>`;
};

export { Navbar, sidebar };
