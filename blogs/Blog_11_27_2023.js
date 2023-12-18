import Image from "next/image";
import hljs from "highlight.js";
import React, { useState, useEffect } from 'react';


function Post(props) {
  return (
    <div>
      <Background src={props.postData.bg_image} width="2298" height="1800"/>
      <Caption link="https://www.artic.edu/artworks/16568/water-lilies" title="Water Lilies - Claude Monet" />
      <Body h></Body>
    </div>
  )
}

function Background(props) {

  return (
    <div className="Background">
    <Image src={props.src} width="2298" height="1800" />
    <style jsx> {
      `
      .Background {
        position:relative;
        grid-row:1/1;
        grid-column: 2/3;
        width:100%;
        overflow:hidden;
        margin-top:5%;
        
    }
  
      `
    }
    </style>
    </div>
  )
}

function Blog_11_27_2023(props) {

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="Post">
      <Background src={props.postData.bg_image} width="2298" height="1800"/>

      <p className="Caption">
        <i> Water Lilies - Claude Monet</i>. (<a
          href="https://www.artic.edu/artworks/16568/water-lilies"
          target="_blank"
        >
          Artic
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
              grid-template-columns: 20vw 60vw 25vw;
              margin-bottom:10vh;
              line-height: 1.6;
            }

            .Content {
              grid-column: 2/2;
              grid-row:3/3;
              margin: 0% 5vw 0% 5vw;
            }
            
          

  .Caption {
    grid-row:2/2;
    grid-column:2/3;

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

export { Blog_11_27_2023 };
