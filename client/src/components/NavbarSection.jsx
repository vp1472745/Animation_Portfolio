import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      
      {/* LEFT LOGO */}
      <div className="logo">VINEET</div>

      {/* RIGHT SIDE */}
      <div className="nav-right">

        <button className="nav-icon">—</button>

        {/* 📞 CALL BUTTON */}
        <a href="tel:9999999999" className="nav-btn dark">
          LET'S TALK <span className="dot"></span>
        </a>

        {/* 📂 MENU BUTTON */}
        <div className="menu-wrapper">
          <button 
            className="nav-btn light"
            onClick={() => setOpen(!open)}
          >
            MENU <span className="dots">••</span>
          </button>

          {/* DROPDOWN */}
          {open && (
            <div className="dropdown">
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Navbar;