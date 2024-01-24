import React from "react";
import profilePic from '../../Assets/ProfilePic.jpeg'
import AnandKumarK from '../../Assets/AnandaKumarK.pdf'
import style from "../../styles/about.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Image, Text, useColorMode } from "@chakra-ui/react";
export default function About() {
  const { colorMode } = useColorMode();
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about" className={colorMode !== "light" ? "about section dark1" : "about section"}>
      <Text textAlign={'center'} fontSize={'20px'}>About Me</Text>
      <div className={style.about}>
        {/* <BookType /> */}
        <span>
          <Image
            className="home-img"
            src={profilePic}
            alt="profile_img"
            // boxSize={{xs:'70px',sm:'100px',md:'250',lg:'350px'}}
            borderRadius='full'
            w={'350px'}
            align={'center'}
            margin={'auto'}
          // margin={{xs:'auto',md:'unset'}}
          />
        </span>
        <div className={style.name}>
          <h1 id="intro">
            <span id="user-detail-name"><Text>Hello I'm Anand Kumar K</Text></span>
          </h1>

          <div className={style.flipBox}>
            <div className={style.flip}>
              <div>
                <div style={{ color: "white" }}>Critical Thinker</div>
              </div>
              <div>
                <div style={{ color: "white" }}>Problem Solver</div>
              </div>
              <div>
                <div style={{ color: "white" }}>Goal Oriented</div>
              </div>
            </div>
          </div>
          <p id="user-detail-intro">
            A passionate Full Stack Web Developer with strong
            problem-solving abilities, proficient in React Js, Mongo DB,
            Express Js Next Js, Typescript and Chakra Ui CSS keen to learn
            new technologies .
          </p>
          <p id="user-detail-intro">
            Looking forward to starting career in a fast growing startup driven by technology. I am committed to delivering excellence and contributing to the continued growth and success of innovative web applications.
          </p>

          <div style={{ "display": "flex", flexWrap: "nowrap", justifyContent: "center", alignItems: "center", margin: '10px' }}>
            
            {/* </button> */}
            {/*  */}
            <a
              href="https://github.com/AnandAK07"
              className={style.githubBtn}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            {/*  */}
            <a
              href="https://www.linkedin.com/in/anandak07/"
              className={style.githubBtn}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <button
              className={style.ResumeBtn}
              id="resume-button-2"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1uTWhsMfZ8LXF0QhTHioufD8DCAaL1Rku/view?usp=sharing", '_blank'
                );
              }}
            >
              <a href={AnandKumarK} download="Ananad Kumar K" id="resume-link-2" className="nav-link resume" >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}