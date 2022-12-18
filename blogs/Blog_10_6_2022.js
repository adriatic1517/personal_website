import Image from "next/image";

function Blog_10_6_2022() {
  return (
    <div className="Post">
      <div className="Content">
        <h1>This will be the heading</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>This is another para</p>
        <p>This is another one</p>
        <p> Lorum Ipsum</p>
        <div className="sunflower">
          <Image
            src="/bg_images/mountain.png"
            layout="responsive"
            width="300px"
            height="50px"
          />
        </div>
      </div>

      <style jsx>{`
        .Post {
          display: grid;
          grid-template-columns: 20vw 45vw 35vw;
          margin-left: 5vw;
          margin-bottom: 10vh;
        }
        .Content {
          grid-column: 2/2;
        }

        .sunflower {
          height: 50px;
        }
      `}</style>
    </div>
  );
}

export { Blog_10_6_2022 };
