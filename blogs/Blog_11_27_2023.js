import Post from "../components/post"
import Code from "../components/code"

function Blog_11_27_2023(props) {
      return (
      <Post bg_image={props.postData.bg_image}
        bg_title="Water Lillies - Claude Monet"
        bg_url="https://www.artic.edu/artworks/16568/water-lilies"
      >
<p>
            How does User Sign up work?
          </p>
          
          <p>
            How does User Sign up work?
          </p>
          <pre>
            <Code className="language-typescript"> </Code>
          </pre>
          <p>
            How does User Sign up work?
          </p>
          <pre>
            <code className="language-typescript">  { 
`def new_function():
    on_a = 20 \n` }</code>
          </pre>

      </Post>

  );
}

export { Blog_11_27_2023 };
