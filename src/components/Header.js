import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

const Header = () => {
    return (
      <header className="flex justify-end pr-10 pt-5 gap-2">
        
        <a href="https://www.linkedin.com/in/marianniartoni/">
          <IoLogoLinkedin className="text-3xl" />
        </a>
        {/* abrir em outra aba? */}
        <a href="https://github.com/MarianniArtoni">
          <IoLogoGithub className="text-3xl" />
        </a>
        <a href="mailto:mariartoni12@gmail.com?subject=Contato Profissional" target="_blank" rel="noopener noreferrer">
          <BiLogoGmail className="text-3xl" />
        </a>
        
      </header>
    );
  };

export default Header;