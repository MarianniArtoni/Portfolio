import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
      <header className="text-center">
        <h1 className="text-4xl font-bold">Welcome.</h1>
        <p className="text-xl mt-2">Desenvolvedor Web | Criador de Soluções</p>
        <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-white text-3xl hover:text-blue-300" />
      </header>
    );
  };

export default Header;