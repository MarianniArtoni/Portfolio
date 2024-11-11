
import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Body from './components/Body.js';

function App() {
  return (
    <div className='min-h-screen w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#7f3d9e] to-[#831fe0]'>
      <Header />
      <Body />
    </div>
  );
}

export default App;
