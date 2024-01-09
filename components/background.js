import Image from "next/image";

export default function Background(props) {

    return (
      <div className="Background">
      <Image src={props.src} width="2298" height="1800" />
      <p className="Caption">
          <i>{props.title}</i>. (<a
            href={props.url}
            target="_blank"
          >
            Artic
          </a>)
        </p>
  
      <style jsx> {
        `
        @media (max-width: 720px) {
          .Background {
            position: relative;
            grid-row: 1/1;
            grid-column: 1/1;
            height: 100%;
            width: 100%;
            margin-left: 10
          }
        }

        @media (min-width: 720px) {
          .Background {
            position: relative;
            grid-row: 1/1;
            grid-column: 2/3;
            height: 100%;
            width: 100%;
            margin-left: 10
          }
        }
        `
      }
      </style>
      </div>
    )
  }