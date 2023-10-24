import Image from "next/image";

function Blog_11_27_2022(props) {
  return (
    <div className="Post">
      <div className="Background">
        <Image src={props.postData.bg_image} width="2298" height="3722" />
      </div>

      <p className="caption">
        <i> "Laila and Majnun in School", Folio 129 from a Khamsa (Quintet) of Nizami of Ganja
</i>. (<a
            href="https://www.metmuseum.org/art/collection/search/446603"
            target="_blank"
          >
            The Met, New York
          </a>)
      </p>
      
      <div className="Content">
        <h1 className="Heading">Color</h1>
        <p>
          Recently, I read the novel My Name is Red by Orhan Pamuk. 
          The novel narrates a story about miniaturists in service of the Ottoman Sultan in Istanbul in 1591.
          I actually found the painting above before reading the novel and was amused to see it referenced in the novel. Anyway, I thought this quote was quite interesting and wanted to share it:
          </p> 
          <blockquote>
            
          Only a weak and hesitant miniaturist would use a variety of red tones to depict the red of a caftan, they claimed shadows were not an excuse. Besides, we believe in only one red.

<p>“What is the meaning of red?” the blind miniaturist who’d drawn the horse from memory asked again.</p>

<p>“The meaning of color is that it is there before us and we see it,” said the other. “Red cannot be explained to he who cannot see.”</p>

<p>“To deny God’s existence, victims of Satan maintain that God is not visible to us,” said the blind miniaturist who’d rendered the horse.</p>

<p>“Yet, He appears to those who can see,” said the other master. “It is for this reason that the Koran states that the blind and the seeing are not equal.”</p>

        </blockquote>
        <p className="source">
          <a
            href="https://en.wikipedia.org/wiki/My_Name_Is_Red"
            target="_blank"
          >
            - My Name is Red, Orhan Pamuk 1998.
          </a>
        </p>

        

  
      </div>

      <style jsx>{`
           @media (min-width: 700px) {

.Post {
  display:grid;
  grid-template-rows: auto 4vh auto;
  grid-template-columns: 25vw 50vw 30vw;
  margin-bottom:10vh;
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

  .caption {
    grid-row:2/2;
  }

           .Heading {
            font-size:3.5vh;
           }

          }



          @media (max-width: 700px) {
            .Post {
              display: grid;
              grid-template-rows: 75vh 6vh auto;
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
              padding-left: 6vw;
              padding-right: 7vw;
              font-size: 1.75vh;
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

        .caption {
            margin-top: 3vh;
        }


       
           
            
           `}</style>
    </div>
  );
}

export { Blog_11_27_2022 };
