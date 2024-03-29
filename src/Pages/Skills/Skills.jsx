import React from "react";
import style from "../../styles/skills.module.css";

import js from '../../Assets/js.png'
import html from '../../Assets/html.png'
import css from '../../Assets/css.png'
import ts from '../../Assets/ts.png'
import react from '../../Assets/react.png'
import node from '../../Assets/node.png'


import ex from '../../Assets/ex.png'
import git from '../../Assets/git.png'
import github from '../../Assets/github.png'
import mongodb from '../../Assets/mongodb.png'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="skills">
      <div id="Skills" className={style.outer_box}>

        <h1 className={style.main_heading}>Technical Skills</h1>


        <div className={style.main_box} >
          <div style={{
            border: '1px solid black', borderRadius: '1rem'
          }}>
            <h1>Languages</h1>
            <div className={style.language_logo} >
              <div data-aos="flip-left" className="skills-card">
                <img src={js} alt="JavaScript" className="skills-card-img" />
                <h3 className="skills-card-name">JavaScript</h3>
              </div>
              <div data-aos="flip-left" style={{ width: "40%" }} className="skills-card">
                <img src={ts} alt="TypeScript" className="skills-card-img" />
                <h3 className="skills-card-name">TypeScript</h3>
              </div>
            </div>
            <p
              style={{
                width: "90%",
                margin: "auto",
                textAlign: "center",
                
              }}>
              My favorite languages for Development
            </p>
          </div>

          <div className={style.frontend} style={{
            border: '1px solid black', borderRadius: '1rem'
          }}>
            <h1>Front-End</h1>
            <div className={style.frontend_logo}>
              {" "}
              <div data-aos="flip-left" className="skills-card">
                <img src={html} alt="html" className="skills-card-img" />
                <h3 className="skills-card-name">HTML</h3>
              </div>
              <div data-aos="flip-left" className="skills-card">
                <img src={css} alt="css" className="skills-card-img" />
                <h3 className="skills-card-name">CSS</h3>
              </div>
              <div data-aos="flip-left" className="skills-card">
                <img src={react} alt="React" className="skills-card-img" />
                <h3 className="skills-card-name">React</h3>
              </div>
              <div data-aos="flip-left" className="skills-card">
                <img src={node} alt="Next.js" className="skills-card-img" />
                <h3 className="skills-card-name">Node.js</h3>
              </div>
            </div>
            <p
              style={{
                width: "90%",
                margin: "auto",
                textAlign: "center",
                marginTop: "30%",
              }}>
              My preferred technologies for front-end web development and
              component design.
            </p>
          </div>

          <div className={style.backend} style={{
            border: '1px solid black', borderRadius: '1rem'
          }}>
            <h1>Back-End</h1>
            <div className={style.backend_logo}>
              <div data-aos="flip-left" className="skills-card">
                <img src={ex} alt="express" className="skills-card-img" />
                <h3 className="skills-card-name">Express</h3>
              </div>
              <div data-aos="flip-left" className="skills-card">
                <img src={mongodb} alt="mongodb" className="skills-card-img" />
                <h3 className="skills-card-name">MongoDB</h3>
              </div>
            </div>
            <p
              style={{
                width: "90%",
                margin: "auto",
                textAlign: "center",
                marginTop: "30%",
              }}>
              My preferred technologies for back-end web programming and
              database architecture.
            </p>
          </div>

          <div className={style.tools} style={{
            border: '1px solid black', borderRadius: '1rem'
          }}>
            <h1>Tools</h1>
            <div className={style.tools_logo}>
              <div data-aos="flip-left" className="skills-card">
                <img src={git} alt="git" className="skills-card-img" />
                <h3 className="skills-card-name">Git</h3>
              </div>
              <div data-aos="flip-left" className="skills-card">
                <img src={github} alt="github" className="skills-card-img" />
                <h3 className="skills-card-name">Github</h3>
              </div>
            </div>
            <p
              style={{
                width: "90%",
                margin: "auto",
                textAlign: "center",
                marginTop: "30%",
              }}>
              My favorite tools for version control, code editing, and container
              orchestration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}