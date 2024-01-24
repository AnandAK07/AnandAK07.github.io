import style from "../../styles/statistics.module.css";
import GitHubCalendar from "react-github-calendar";
import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useColorMode } from "@chakra-ui/react";

export default function GithubStats() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const { colorMode } = useColorMode();

  return (
    <>
      {" "}
      <div className={style.outer_box} >

        <h1 className={style.main_heading}>My Statistics</h1>


        <div className={style.flex_box}>
          <div data-aos="zoom-in" >
            <img
              src={
                colorMode === "dark"
                  ? "https://github-readme-streak-stats.herokuapp.com?user=AnandAK07&theme=dark"
                  : "https://github-readme-streak-stats.herokuapp.com?user=AnandAK07"
              }
              alt="stats"
              id="github-streak-stats"

            />
          </div>
          <div data-aos="zoom-in">
            <img
              id="github-stats-card"
              src={
                colorMode === "dark"
                  ? "https://github-readme-stats.vercel.app/api?username=AnandAK07&theme=dark"
                  : "https://github-readme-stats.vercel.app/api?username=AnandAK07"
              }
              alt="contribution"
            />
          </div>
        </div>
        <div className={style.flex_box}>
        <div data-aos='zoom-out'>
          <img
            src={
              colorMode === "dark"
                ? "https://github-readme-stats.vercel.app/api/top-langs/?username=AnandAK07&theme=dark"
                : "https://github-readme-stats.vercel.app/api/top-langs/?username=AnandAK07"
            }
            alt="Top Lang"
            id="github-top-langs"
          />
        </div>
        <div data-aos='zoom-out'>
        <img
          src={
            colorMode === "dark"
              ? "https://github-readme-stats.vercel.app/api/top-langs/?username=AnandAK07&theme=dark&layout=donut"
              : "https://github-readme-stats.vercel.app/api/top-langs/?username=AnandAK07&layout=donut"
          }
          alt="Top Lang"
          id="github-top-langs"
        />
        </div>
      </div>
      </div>

      <div className={style.outer_box}>

        <h1 className={style.main_heading}>My Github Calender</h1>

        <div data-aos="fade-up" className={style.Calendar}>
          <GitHubCalendar year='2023' username="AnandAK07"/>
          
        </div>
      </div>
      <div className={style.outer_box}>

        <h1 className={style.main_heading}>Github Contribution Graph</h1>

        <div className={style.graph}>

          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=AnandAK07&theme=react-dark"
            alt=""
          />
        </div>
      </div>
    </>
  );
}