import React from 'react';
import "./App.css";
import Header from './componentes/header/Header';
import Home from './componentes/home/Home';
import About from './componentes/about/About';

const App = () => {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
    </main>
    </>
  )
}

export default App;