import Post from "../components/post"
import Code from "../components/code"
import Image from "next/image";
import Background from "../components/background";

function Blog_12_26_2023(props) {
      return (
      <Post bg_image={props.postData.bg_image}
        bg_title="Water Lillies - Claude Monet"
        bg_url="https://www.artic.edu/artworks/16568/water-lilies"
        heading="Running a bitcoin node"
        date="19th December 2023">

      </Post>

  );
}

export { Blog_12_26_2023 };
