import Image from "next/image";
import hljs from "highlight.js";
import React, { useState, useEffect } from 'react';

function Blog_12_12_2023(props) {

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="Post">
      <div className="Background">
        <Image src={props.postData.bg_image} width="2298" height="1800" />
      </div>

      <p className="Caption">
        <i> A village in Nuristan, Afghanistan</i>. (<a
            href="https://www.reddit.com/r/Afghan/comments/w8q37m/some_afghanistanrelated_artwork_from_sharifi_art/"
            target="_blank"
          >
           Sharifi Gallery
          </a>)
      </p>
      
      <div className="Content">
        <h1 className="Heading">Sign up</h1>
        <p>
          How does User Sign up work?
        </p>
        <pre>
        <code className="language-typescript">const variable = 'raw';</code>
      </pre>
  
      </div>

      <style jsx>{`
           @media (min-width: 700px) {

.Post {
  display:grid;
  grid-template-rows: auto 4vh auto;
  grid-template-columns: 25vw 50vw 30vw;
  margin-bottom:10vh;
  line-height: 1.6;
}

.Content {
  grid-column: 2/2;
  grid-row:3/3;
}

    .Background {
       
      position:relative;
      grid-row:1/1;
      grid-column: 1/4;
      width:100vw;
      overflow:hidden;
      

  }

  .Caption {
    grid-row:2/2;
    margin-left:10px;
  }

           .Heading {
            font-size:3.5vh;
           }

    }



          @media (max-width: 720px) {
            .Post {
              display: grid;
              grid-template-rows: auto;
              grid-template-columns: 100vw;
              margin-bottom: 10vh;
              line-height: 1.6;
              font-size: 1.1rem;
            }
  
            .Background {
              position: relative;
              grid-row: 1/1;
              grid-column: 1/1;
              height: 100%;
              width: 100%;
              margin-left: 10
            }
  
            .Caption {
              grid-row: 2/2;
              padding-left: 5vw;
              padding-right: 5vw;
              font-size: 16px;
            }
  
            .Content {
              grid-column: 1/1;
              grid-row: 3/3;
              padding-left: 6vw;
              padding-right: 7vw;
            }
  
          }

          
        blockquote {
          background: #f9f9f9;
          border-left: 8px solid #ccc;
          margin: 1.5em 10px;
          padding: 0.5em 10px;
          font-family: Palatino;
          font-weight: 400;
          line-height: 1.4em;
          background-color: white;
        }
        

        blockquote > cite {
          text-align: right;
        }

        .source {
          text-align: right;
          margin-top: -3vh;
          margin-right: 5vw;
          margin-bottom: 4vh;
          font-size: 0.9rem;
        }

        


       
           
            
           `}</style>
    </div>
  );
}

export { Blog_12_12_2023 };