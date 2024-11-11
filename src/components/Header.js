import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
      <header className="text-center">
        
        <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-white text-3xl hover:text-blue-300" />
      </header>
    );
  };

export default Header;