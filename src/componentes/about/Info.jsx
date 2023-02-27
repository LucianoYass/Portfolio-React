import React from 'react';

const info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experiencia</h3>
            <span className="about__subtitle">1 año de aprendizaje</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completado</h3>
            <span className="about__subtitle">Varios proyectos personales</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Disponibilidad horaria</h3>
            <span className="about__subtitle">Full time</span>
        </div>
    </div>
  )
}

export default info;