import React from 'react';
import "./skills.css";
import Frontend from './Frontend';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Habilidades</h2>
        <span className="section__subtitle">Nivel técnico</span>

        <div className="skills_container container grid">
            <Frontend/>
        </div>
    </section>
  )
}

export default Skills;