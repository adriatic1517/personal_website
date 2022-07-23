
import './App.css';
import React from 'react';


export default class App extends React.Component {
  render() {
    return (
      <div className="Portfolio">
   
        <Portrait/>
        <Name/>
        <AboutMe/>
  
      </div>
    );
  }
}

class Portrait extends React.Component {
  render(){
    return (
      <div className="Portrait">
         <img src="/portrait.jpg" alt = ""></img>
      </div>
    );
  }
}


class Name extends React.Component {
  render(){
    return (
      <div className="Name">
         <h1> Emad Siddiq </h1>
      </div>
    );
  }
}






class AboutMe extends React.Component {
  render(){
    return (
      <div className="AboutMe" id = "About Me">
        
        <p className="hello">Hello &#128075;</p>
        
        <p>
          
           I recently graduated from UC Berkeley with a Bachelors in Political Economy & Data Science. 
           I am now working at <a href="https://www.fin3.tech/"> Fin3</a> as a Software Engineer.
        
        </p>

        <p> My interests center around AI, ML and blockchain technologies. You can find some of the projects I have 
          worked on on my <a href="https://github.com/adriatic1517"> Github</a>. 
        </p>

        <p>I look forward to connecting with you!</p>
        <p className= "Links">
           <a href="Emad_Siddiq_Resume.pdf">Resume</a> |
           <a href="https://www.linkedin.com/in/emad-siddiq-2b9979164/"> LinkedIn </a> |
           <a href="/blog/index.html"> Blog</a>
            </p>
        


    </div>
    );
  }
}

