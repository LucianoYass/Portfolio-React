import React from 'react';
import "./about.css";
import AboutImg from "../../assets/perfil.jpg";
import CV from "../../assets/Profile.pdf";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">Sobre mí</h2>
        <span className="section__subtitle">Introducción</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img"/>

            <div className="about__data">
                <Info/>

                <p className="about__description">Frontend developer, poseo conocimientos y experiencia en HTML, CSS, Javascript, C#, React, NodeJS.</p>

                <a download="" href={CV} className="button button--flex">Descargar CV
                </a>
            </div>
        </div>
    </section>
  )
}

export default About;