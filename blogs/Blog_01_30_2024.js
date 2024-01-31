import Post from "../components/post"
import Code from "../components/code"
import Image from "next/image";
import Background from "../components/background";

function Blog_01_30_2024(props) {
      return (
      <Post bg_image={props.postData.bg_image}
        bg_title="The perceptron algorithm"
        bg_url="https://www.reddit.com/r/EngineeringPorn/comments/yp9xot/frank_rosenblatt_with_a_mark_i_perceptron/"
        heading="The Perceptron Algorithm"
        date="30th January 2024">

        <p>Coming soon...</p>
      </Post>

  );
}

export { Blog_01_30_2024 };
