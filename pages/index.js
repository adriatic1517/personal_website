import React from "react";
import styles from "../styles/Main.module.css";

import BlogPost from "../components/homepage/blogpost"
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function App({allPostsData}) {
    return (
      <div className={styles.Home}>
      <div className={styles.Portfolio}>
        <Portrait />
        <Name />
        <AboutMe /> 

      </div>
      <h1 className={styles.BlogHeading}>Blogs</h1>
      <Blogs allPostsData={allPostsData} />
      </div>
    );
  }

class Portrait extends React.Component {
  render() {
    return (
      <div className={styles.Portrait}>
        <img src="/portrait.png" alt=""></img>
      </div>
    );
  }
}

class Name extends React.Component {
  render() {
    return (
      <div className={styles.Name}>
        <h1> Emad Siddiq </h1>
      </div>
    );
  }
}

class AboutMe extends React.Component {
  render() {
    return (
      <div className={styles.AboutMe} id="About Me">
        <p className={styles.hello}>Hello &#128075;</p>

        <p>
          I like technology and politics. During my undergraduate I studied
          Political Economy & Data Science. I now work as a Software Engineer (actively looking!).
        </p>

        <div className={styles.Links}>
          <a href="Emad_Siddiq_Resume.pdf">Resume</a> |
          <a href="https://www.linkedin.com/in/emad-siddiq-2b9979164/">
            {" "}
            LinkedIn{" "}
          </a>{" "}
          |<a href="https://www.github.com/emad10101"> GitHub</a> 
          |<a href="https://docs.google.com/document/d/1Arf0A1_9D6eAew49qxsM57Nhh2Nqw_Vj7TYoWBiwSzY/edit"> CS Resources</a>


        </div>
      </div>
    );
  }
}

function Blogs({ allPostsData }) {
  return (
    <div className={styles.Blogs}>
      {allPostsData.map(({ id, date, title, bg_image }) => (
        <BlogPost
          css="Blog"
          title={title}
          id={id}
          date={date}
          key={id}
          bg_image={bg_image}
        />
      ))}
    </div>
  );
}

