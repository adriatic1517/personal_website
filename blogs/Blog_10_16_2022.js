import Image from "next/image";

function Blog_10_16_2022(props) {
  return (
    <div className="Post">
      <div className="Background">
        <Image src={props.postData.bg_image} layout="fill" />
      </div>

      <p className="Caption">
        <i> {props.postData.caption}</i>
      </p>
      <div className="Content">
        <h1 className="kufi">
          {" "}
          <a href="https://en.wikipedia.org/wiki/Basmala" target="_blank">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ{" "}
          </a>
        </h1>
        <p className="translation">
          In the name of God, the Most Gracious, the Most Merciful
        </p>
        <p>
          Ever since graduation I haven't been writing that much and this blog
          is meant to remedy that. I am not sure exactly what I'll write about
          but I'll try my best to keep it interesting. Towards that goal, the
          image in the background will help lay out the imagery for the content.
         {" "}
        </p>
        <blockquote cite="https://oart.eu/melody">
          When playing a piece of instrumental music on the rubab it is
          customary to begin with a slow introduction in free rhythm that
          reveals the melodic characteristics of the mode to be played. Such an
          introduction is called a shakl, meaning 'face' or 'features'. It
          corresponds approximately to the{" "}
          <a href="https://en.wikipedia.org/wiki/Alap" target="_blank">
            alap
          </a>{" "}
          of North Indian music, or the{" "}
          <a target="_blank" href="https://en.wikipedia.org/wiki/Taqsim">
            taqsim
          </a>{" "}
          of Middle Eastern music.
        </blockquote>

        <p className="source">
          <cite>
            <a
              href="https://oart.eu/melody#:~:text=When%20playing%20a%20piece%20of%20instrumental%20music"
              target="_blank"
            >
              {" "}
              - Dr. John Baily (oart.eu)
            </a>{" "}
          </cite>
        </p>

        <p>
          The particular picture image above reminds me of the drive on the way
          back from Swat Valley through the Malakand mountains, a few miles to
          the west of the Karakar Pass. Besides their scenic beauty, the passes
          are famous for their infallible defense by the Yousafzai Pashtuns, the
          inhabitants of the valley since the 16th century when they first
          conquered it under Malak Ahmad Khan Yusufzai, (1460–1530).
        </p>

        <p>
          I'll narrate the battle that was mentioned in the caption of this
          image. In 1586, the famed Mughal Emperor Akbar lost 8000 soldiers and
          the main commander of the Mughal army,{" "}
          <a target="_blank" href="https://en.wikipedia.org/wiki/Birbal">
            Raja Birbal
          </a>
          , at the Karakar Pass in an attempt to subdue the Yousafzai Pashtuns.{" "}
        </p>

        <blockquote>
          The Mughal army forced the submission of many Yusufzai chiefs in Swat
          and Bajaur. But a relief force on its way to Swat through the
          difficult mountain terrain met disaster.
          <p>
            Split command between a royal favorite, Raja Bir Bar*, the court
            wit, and Zain Khan Koka, an ordinary field general, weakened the
            usually careful deployment of Akbar's armies.{" "}
          </p>
          A reckless attack on the Yusufzais exposed the royal army to ambush in
          the mountain passes. About 8,000 imperial soldiers, including Raja Bir
          Bar, were killed in the greatest disaster to Mughal arms in Akbar's
          reign.
        </blockquote>
        <p className="source">
          <a
            href="https://www.google.com/books/edition/The_Mughal_Empire/HHyVh29gy4QC?hl=en&gbpv=1&pg=PA50&printsec=frontcover"
            target="_blank"
          >
            - The Mughal Empire. Gordan & Richards, 1993.
          </a>
        </p>
        

        <p>
          The pass was subsequently visited by the British during their colonial
          campaigns. Winston Churchill, writes
          (with bigotry omitted) of the British troops upon reaching Mingora:{" "}
        </p>
        <blockquote>
          On the 21st a reconnaissance as far as the Kotke Pass afforded much
          valuable information as to the nature of the country. <br></br>
          <br></br>
          All were struck with the beauty of the scenery, and when on the 24th
          the force marched back to Barikot, they carried away with them the
          memory of a beautiful valley, where the green of the rice fields was
          separated from the blue of the sky by the glittering snow peaks of the
          Himalayas.<br></br>
          <br></br>
          While the troops rested at Barikot, Sir Bindon Blood personally
          reconnoitred the Karakar Pass, which leads from the Swat Valley into
          the country of the Bunerwals. Telegrams were despatched to India on
          the subject, and after much delay and hesitation the Viceroy decided
          against the recommendation of his victorious general.
        </blockquote>
        <p className="source">
          <a
            href="https://www.gutenberg.org/files/9404/9404-h/9404-h.htm"
            target="_blank"
          >
            - Malakand Field Force, Winston Churchill, 1898
          </a>
        </p>

        <p>
          After several battles, the British would settle on creating a buffer
          zone towards the north of Malakand by entering into alliances with the
          Princely States of Swat & Dir.
        </p>

        <p>
          {" "}
          The Princely States were later absorbed into Pakistan in 1947 leading
          to a{" "}
          <a
            href="https://tribune.com.pk/story/2078824/across-religious-divides-harmonious-haven-hindus-khyber-pakhtunkhwa"
            target="_blank"
          >
            mass exodus of the sizeable local Hindu population
          </a>
          
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/Train_to_Pakistan"
          >
            here
          </a>
          's a great novel on the Partition that was assigned for one of my
          courses).
        </p>

        <p>
          Another more recent mass displacement of the residents of the valley
          occured during the Second Battle of Swat in 2009 when the 2 million
          local population of Swat were internally displaced for military
          operations against the TTP.
        </p>


        <p className="date">16th October 2022</p>
      </div>

      <style jsx>{`
        .fiatLux {
          text-align: center;
          margin-top: 4vh;
        }
        .source {
          text-align: right;
          margin-top: -3vh;
          margin-right: 5vw;
          margin-bottom: 4vh;
          font-size: 0.9rem;
        }
        .date {
          font-size: 2.2vh;
          margin-top: -2vh;
          color: rgb(0, 0, 0, 0.9);
          text-align: right;
        }

        .signature {
          text-align: right;

          margin-top: 5vh;

          font-size: 2.5vh;
          color: rgb(0, 0, 0, 0.9);
        }

        blockquote {
          background: #f9f9f9;
          border-left: 8px solid #ccc;
          margin: 1.5em 10px;
          padding: 0.5em 10px;
          font-family: Palatino;
          font-weight: 400;
        }
        blockquote:before {
          color: #ccc;
          content: open-quote;
          font-size: 3em;
          line-height: 0.1em;
          margin-right: 0.25em;
          vertical-align: -0.4em;
        }

        blockquote:after {
          color: #ccc;
          content: close-quote;
          font-size: 3em;
          line-height: 0.1em;
          margin-right: 0.25em;
          vertical-align: -0.45em;
          margin-left: 0.25em;
        }

        blockquote > cite {
          text-align: right;
        }

        @media (min-width: 700px) {
          .kufi {
            font-family: "Noto Kufi Arabic", sans-serif;
            font-size: 3.5vh;
            margin-top: 5vh;
            text-align: center;
            font-weight: 400;
          }

          .kufi > a {
            color: black;
            text-decoration: none; /* no underline */
          }

          .translation {
            text-align: center;
            font-size: 1.75vh;
            margin-bottom: 5vh;
            margin-top: -2vh;
            color: rgb(107, 107, 107);
          }

          .Post {
            display: grid;
            grid-template-rows: 75vh 4vh auto;
            grid-template-columns: 25vw 50vw 30vw;
            margin-bottom: 10vh;
            line-height: 1.6;
            font-size: 1.2rem;
          }

          .Background {
            position: relative;
            grid-row: 1/1;
            grid-column: 1/4;
            height: 100%;
            width: 100%;
          }

          .Caption {
            grid-row: 2/2;
            margin-left: 2vw;

            font-size: 16px;
            color: rgb(107, 107, 107);
            text-align: left;
          }

          .Content {
            grid-column: 2/2;
            grid-row: 3/3;
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

          .kufi {
            font-family: "Noto Kufi Arabic", sans-serif;
            font-size: 3.5vh;
            margin-top: 5vh;

            padding-right: 3vw;
            text-align: center;
            font-weight: 600;
          }
          .translation {
            text-align: center;
            color: rgb(107, 107, 107);

            font-size: 1.6vh;
            margin-top: -2vh;
          }

          .kufi > a {
            color: black;
            text-decoration: none; /* no underline */
          }

          blockquote {
            background: #f9f9f9;
            border-left: 8px solid #ccc;
            margin: 1.5em 10px;
            padding: 0.5em 10px;
            font-family: Palatino;
            font-weight: 400;
          }
          blockquote:before {
            color: #ccc;
            content: open-quote;
            font-size: 2em;
            line-height: 0.1em;
            margin-right: 0.25em;
            vertical-align: -0.4em;
          }

          blockquote:after {
            color: #ccc;
            content: close-quote;
            font-size: 2em;
            line-height: 0.1em;
            margin-right: 0.25em;
            vertical-align: -0.45em;
            margin-left: 0.25em;
          }

          blockquote: cite {
            text-align: right;
            font-size: 3em;
          }
        }
      `}</style>
    </div>
  );
}

export { Blog_10_16_2022 };
