import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Estudios</h2>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"} onClick = {() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon">Educación</i>
                </div>

                <div  className={toggleState === 2 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"} onClick = {() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon">Fecha Cursada</i>
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">JavaScript</h3>
                            <span className="qualification__subtitle">Coderhouse</span>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">React</h3>
                            <span className="qualification__subtitle">Coderhouse</span>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">C#</h3>
                            <span className="qualification__subtitle">Curso MaxiPrograma</span>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Desarrollo Web</h3>
                            <span className="qualification__subtitle">Coderhouse</span>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Tecnicatura en Programación Infórmatica</h3>
                            <span className="qualification__subtitle">Universidad Nacional de Quilmes</span>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                    <div className="qualification__data">
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> Noviembre 2022 - Enero 2023
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>Febrero 2023 - Abril 2023
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                    <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>Octubre 2022 - Enero 2023
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                    <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>Agosto 2022 - Octubre 2022
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                    <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2022 - Presente
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification;