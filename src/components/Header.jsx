import React from "react";
import Logo from "../assets/light-logo.png";
import GitLogo from "../assets/github.svg";

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <img src={Logo} alt="Logo" className="w-40" />
      <a
        href="https://github.com/HasibX2000"
        target="_blank"
        className="flex items-center justify-center gap-2"
      >
        <img src={GitLogo} alt="github logo" className="w-8" />
        <span className="font-medium text-xl text-white">GitHub</span>
      </a>
    </nav>
  );
};

export default Header;
