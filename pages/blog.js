import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emad's Blog</title>
        <meta name="description" content="Fun stuff from CS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Title />
      <AboutMe/>
      <Blogs allPostsData={allPostsData} />
    </div>
  );
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

function Title() {
  return (
    <div className={styles.Title}>
      <h1>Emad's Blog</h1>
      <p>Very fancy</p>
    </div>
  );
}

function AboutMe() {
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
          |<a href="https://www.github.com/adriatic1517"> GitHub</a> 
          |<a href="https://docs.google.com/document/d/1Arf0A1_9D6eAew49qxsM57Nhh2Nqw_Vj7TYoWBiwSzY/edit"> CS Resources</a>
          
        </div>
      </div>
    );
  }



function BlogPost(props) {
  return (
    <Link href={"/posts/" + props.id}>
      <div
        className={styles[props.css]}
        style={{ width: "100%", position: "relative" }}
      >
        <Image src={props.bg_image} layout="fill" />
        <PostDetails {...props} />
      </div>
    </Link>
  );
}

function PostDetails(props) {
  return (
    <div className={styles.PostDetails}>
      <h1 className={styles.postTitle}> {props.title.slice(0, 50)} </h1>
      <p className={styles.postDate}>{props.date}</p>
    </div>
  );
}
