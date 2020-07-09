import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const initalValue = false;
    
const body = document.querySelector('body');

const Navbar = () => {
  const [values, toggleMode] = useDarkMode(initalValue);
  
  if(values === true) {
    body.classList.add('dark-mode');
  }
  else{
    body.classList.remove('dark-mode');
  }


  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={values ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
