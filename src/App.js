
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
         <img src="/portrait.jpg"></img>
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
        
        <p className="hello">Hello and welcome! &#128075;</p>
        
        <p>I recently graduated from UC Berkeley with a Bachelors in Political Economy & Data Science. I am actively looking for entry level engineering positions.
        </p>
        <p> My academic interests center around AI and the ML models that power them.
         Currently I am reading on how CNN's can be used for OCR of languages in the Persio-Arabic script.</p>
        
        <p>Inspired by Professor Michael Jordans's work on Machine Learning and Micreconomic Theory, 
          I am driven to <a href="">understand</a> how AI can bring archaic financial and economic institutions into the 21st century.
        </p>

        <p>I look forward to connecting with you!</p>
        <p className= "Links">
           <a href="/resume.pdf">Resume</a> |
           <a href="https://www.linkedin.com/in/emad-siddiq-2b9979164/"> LinkedIn </a> |
           <a href="https://github.com/adriatic1517"> Github</a>
            </p>
        


    </div>
    );
  }
}

class Coursework extends React.Component {
  render(){
    return (
      <div className="Coursework" id="Coursework">
        <h2>100 Days of AI</h2>
  
        <ul>
          <li> <a href = "http://emad-resume.herokuapp.com/day1.html">Day 1: July 27 2021</a></li>
        </ul>
      </div>
    );
  }
}

