import React from "react";
import "../Style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Title</div>
      <div className="navbar__links">
        <div>Home</div>
        <div>About</div>
        <div>Blog</div>
        <div>Contact</div>
        <div>
          <button className="navbar__button">Button</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
