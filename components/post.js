
import Background from "./background";

export default function Post(props) {
    return (
        <div className="Post">
              <Background src={props.bg_image} width="2298" height="1800" title={props.bg_title} url={props.bg_url} />
  
          <div className="Content">
            <h1 className="Heading">{props.heading}</h1>
            <p className="Date">{props.date} - Emad Siddiq</p>

            

            {props.children}
          </div>
  
        <style jsx>{`

        code {
          color:green;
        }

        .Date {
            margin-top:-3%;
            font-size:14px;
            color: rgba(0, 0, 0, 0.5);
        }
             @media (min-width: 700px) {


  
              .Post {
                display:grid;
                grid-template-rows: auto 4vh auto;
                grid-template-columns: 20vw 60vw 25vw;
                margin-bottom:10vh;
                line-height: 1.6;
              }


              .Post > code {
                font-size: 40px;
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

              .Post > code {
                font-size: 40px;
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
  
         
             
              
             `}</style>
        </div>
        );
  }