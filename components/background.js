import Image from "next/image";

export default function Background(props) {

    return (
      <div className="Background">
      <img src={props.src} width="100%" height="auto" />
      <p className="Caption">
          <i>{props.title}</i>. (<a
            href={props.url}
            target="_blank"
          >
            Source
          </a>)
        </p>
  
      <style jsx> {
        `
        @media (max-width: 720px) {
          .Background {
            position: relative;
            height: 100%;
            width: 100%;
            margin-left: 10
          }
        }

        @media (min-width: 720px) {
          .Background {
            position: relative;
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