import Image from "next/image";

function Blog_11_27_2022(props) {
  return (
    <div className="Post">
      <div className="Background">
        <Image src={props.postData.bg_image} width="2298" height="3722" />
      </div>

      <p className="caption">
        <i> "Laila and Majnun in School", Folio 129 from a Khamsa (Quintet) of Nizami of Ganja
</i>
      </p>
      <div className="Content">
        <h1 className="Heading">Color</h1>
        <p>
          Recently, I have been reading My Name is Red by Orhan Pamuk. The novel narrates a story about miniaturists in service of the Ottoman Sultan in Istanbul in 1591. I actually found the painting above before reading the novel.
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


       
           
            
           `}</style>
    </div>
  );
}

export { Blog_11_27_2022 };
