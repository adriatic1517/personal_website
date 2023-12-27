import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";


export default function BlogPost(props) {
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
  
  