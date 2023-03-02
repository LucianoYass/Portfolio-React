import React from 'react';
import "./App.css";
import Header from './componentes/header/Header';
import Home from './componentes/home/Home';
import About from './componentes/about/About';
import Skills from './componentes/skills/Skills';
import Qualification from './componentes/qualification/Qualification';
import ScrollUp from './componentes/scrollup/ScrollUp';
import Work from './componentes/work/Work';

const App = () => {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Work/>
    </main>
    
    <ScrollUp/>
    </>
  )
}

export default App;