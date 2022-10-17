import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';

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

      <Title/>
      <Blogs allPostsData={allPostsData}/>
      </div>
  )
}

function Blogs({allPostsData}) {
  return (
    <div className={styles.Blogs}>
      {allPostsData.map(({ id, date, title, bg_image}) => (
      <BlogPost css = "Blog" title = {title} id = {id} date= {date} key={id} bg_image = {bg_image}/>
    ))}
    </div>
  )
}

function Title() {
  return (
    <div className={styles.Title}>
      
      <h1>Emad's Blog</h1> 
      <p>Very fancy</p>
    </div> 
  )
}

// 

function BlogPost(props) {
  
  return (
    <Link href = {"/posts/" + props.id}>
    <div className={styles[props.css]} style={{width: '100%', position: 'relative'}}>
     
     <Image src={props.bg_image} layout='fill'/>
    <PostDetails {...props}/>

    </div>
    </Link>


  )
}




function PostDetails(props) {
  return (
    <div className={styles.PostDetails}>
      <h1 className={styles.postTitle}> {props.title.slice(0, 50)} </h1>
      <p className={styles.postDate}>{props.date}</p> 
    </div>

  )
}

