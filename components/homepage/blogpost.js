import Image from "next/image";
import Link from "next/link";


export default function BlogPost(props) {
    return (
      <Link href={"/posts/" + props.id}>
        <div
          className="Blog"
          style={{ width: "100%", position: "relative" }}
        >
          <Image src={props.bg_image} layout="fill" />
          <PostDetails {...props} />
          <style jsx>
          {
            `
            @media (min-width: 700px) {

              .Blog {
                height:50vh;
                margin-bottom: 5vh;
              }
              
            }
            
            @media (max-width: 700px) {

              .Blog {
                height: 32vh;
                margin-bottom: 5vh;
              }
            }
            `

              }
          </style>
        </div>
      </Link>
    );
  }


function PostDetails(props) {
    return (
      <div className="PostDetails">
        <h1 className="postTitle"> {props.title.slice(0, 50)} </h1>
        <p className="postDate">{props.date}</p>

        <style jsx>
          {
            `
            @media (min-width: 700px) {
              .PostDetails {
                position: absolute;
                bottom: 0;
                left: 0;
                color: white;
                background-color: rgba(45, 45, 45, 0.7);
                width: 95%;
                padding-left: 5%;
                height: 10vh;
            
                overflow: hidden;
              }
              .postTitle {
                font-size: 24px;
                color: white;
                font-weight: 600;
                margin-bottom: -1vh;
              }
              .postDate {
                font-weight: 400;
                font-size: 16px;
                margin-left: 0.25vw;
              }

            }

              
            @media (max-width: 700px) {

             
              
              .PostDetails {
                position: absolute;
                bottom: 0;
                left: 0;
                color: white;
                background-color: rgb(0, 0, 0, 0.8);
                width: 95%;
                padding-left: 5%;
                height: 30%;
                line-height: 60%;
            
                overflow: hidden;
              }
              .PostDetails > h1 {
                font-size: 2.6vh;
                font-weight: 500;
              }
              .PostDetails > p {
                font-size: 2vh;
                font-weight: 400;
              }
            
            }       
            
            `
          }
        </style>
      </div>
    );
  }

  
  
  