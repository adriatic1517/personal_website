
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
          I am interested in AI, ML and blockchain technologies. I studied Political Economy & Data Science during my undergraduate at UC Berkeley and work as a Software Engineer now.</p>


        <p className= "Links">
           <a href="Emad_Siddiq_Resume.pdf">Resume</a> |
           <a href="https://www.linkedin.com/in/emad-siddiq-2b9979164/"> LinkedIn </a> |
           <a href="/blog/index.html"> GitHub</a> |
           <a href="/blog/index.html"> Blog</a>
          
            </p>
        


    </div>
    );
  }
}

