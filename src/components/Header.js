import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";

const Header = () => {
    return (
      <header className="text-center">
        <IoLogoLinkedin />
        
        <BiLogoGmail />
      </header>
    );
  };

export default Header;