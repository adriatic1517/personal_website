import Head from 'next/head';
import Blog from '../../components/blog';
import Image from 'next/image';
import styles from '../../styles/Blog.module.css';
import {Blog_10_6_2022} from '../../blogs';
import {Blog_10_16_2022} from '../../blogs';



const Blogs = {
  Blog_10_6_2022,
  Blog_10_16_2022
};


export default function Post({postData}) {
    return (<Blog>
        <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={styles.bg_image}>

      <Image  src={postData.bg_image} layout='fill'/>

      </div>
      <p className={styles.caption}><i> {postData.caption}
            </i></p>
      <div className={styles.blog_content}>
      <BlogComponent component_name= {postData.component_name} />
      </div>
      </Blog>);
  }

import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
const postData = getPostData(params.id);
return {
    props: {
    postData,
    },
};
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
function BlogComponent(props) {
  let Component = Blogs[ props.component_name ];
  return (<Component { ...props } />);

};