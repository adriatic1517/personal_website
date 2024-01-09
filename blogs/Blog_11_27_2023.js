import Post from "../components/post"
import Code from "../components/code"
import Image from "next/image";
import Background from "../components/background";

function Blog_11_27_2023(props) {
      return (
      <Post bg_image={props.postData.bg_image}
        bg_title="Water Lillies - Claude Monet"
        bg_url="https://www.artic.edu/artworks/16568/water-lilies"
        heading="Running a bitcoin node"
        date="19th December 2023">

<p>
            Today, we are going to run a bitcoin node (a.k.a bitcoin client).
          </p>
           <p> It does have some <a href="https://bitcoin.org/en/bitcoin-core/features/requirements" target="_blank">hefty requirements</a>:</p>


  
          <Image src="/static/blog_11_27_2023/bitcoin_core_reqs.png" width="500" height="400" />
          <p> I am going to compile it from source but you could use the
             <a href="https://bitcoin.org/en/download"> graphical installer </a> 
              and we'll end up in the same place in a few paragraphs.</p>
          
         <p>Clone the repo:</p>

            <Code className="language-bash">$ git clone https://github.com/bitcoin/bitcoin.git </Code>


            <Code className="language-bash">./configure</Code>

         
         <p> Go through <code>doc/build-your-os.sh</code> and install any prereqs. Then run:</p>


          <Code className="language-bash">./autogen.sh</Code>

<p> Followed by:
<Code className="language-bash">./configure.sh</Code>
         <center>
         <video autoPlay muted loop style={{ width: '80vw', height: '40vh', marginTop:'-5%', marginBottom:'-5%', alignContent: 'center'}}>
        <source src="/static/blog_11_27_2023/configure.mov" type="video/mp4"/>
      </video></center>       which will set the default configs (see ./configure --help) and generate the build script. 
</p>

<p>We can now compile bitcoind with the command:<Code>make</Code>
You can also <a href="https://github.com/bitcoin/bitcoin/blob/master/doc/build-osx.md#running-bitcoin-core">create a conf file and monitor download progress</a> after running bitcoind available at <Code>./src/bitcoind</Code>

<center>
         <video autoPlay muted loop style={{ width: '100%', height: '40vh', marginTop:'-10%', marginBottom:'-10%', alignContent: 'center'}}>
        <source src="/static/blog_11_27_2023/bitcoind.mov" type="video/mp4"/>
      </video></center> 

This is supposed to take a few days to sync, given that it needs to download about ~350 GB of data at the time of writing. 
 </p>



      </Post>

  );
}

export { Blog_11_27_2023 };
