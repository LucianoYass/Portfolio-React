import React from 'react';
import "./App.css";
import Header from './componentes/header/Header';
import Home from './componentes/home/Home';
import About from './componentes/about/About';
import Skills from './componentes/skills/Skills';
import Qualification from './componentes/qualification/Qualification';

const App = () => {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
    </main>
    </>
  )
}

export default App;