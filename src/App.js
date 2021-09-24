
import './App.css';
import React from 'react';


export default class App extends React.Component {
  render() {
    return (
      <div className="Portfolio">
        <Name />
        <Portrait/>
        <AboutMe />
        <Coursework />
        <Projects/>
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

class Portrait extends React.Component{
  render()
 {
   return (
     <div className="Portrait">
       <img src="/portrait.jpg"></img>
     </div>
   )
 }}


class AboutMe extends React.Component {
  render(){
    return (
      <div className="AboutMe" id = "About Me">

        <p>Hello! I am Emad. 
          I recently graduated from UC Berkeley with a Bachelors in Political Economy & Data Science. </p>

        <p> Quick links:<br /><a href="/resume.pdf">Resume</a>
 and <a href="https://www.linkedin.com/in/emad-siddiq-2b9979164/"> LinkedIn</a></p>

    </div>
    );


  }
}

class Coursework extends React.Component {
  render(){
    return (
      <div className="Coursework" id="Coursework">
        <h2>100 Days of AI</h2>
        <p> I will attempt to do a 100 data science explorations in 100 days. Starting
          July 27th 2021.
        </p>
        <ul>
          <li> <a href = "http://emad-resume.herokuapp.com/day1.html">Day 1: July 27 2021</a></li>
        </ul>
      </div>
    );
  }
}

class Projects extends React.Component {
  render() {
    return (
      <div className="Projects" id = "Projects">
        <h1>Projects</h1>
        <a href = "https://ocf.berkeley.edu/~emadsiddiq/goodnews"><h3>Good News</h3></a>
        <p> In the first quarantine, I used Sentiment Analysis on major news sources and gathered the
          positive articles from within on one website for my friends to view. </p>

        <a href = "https://ocf.berkeley.edu/~emadsiddiq/pashto"><h3>Dictionary of Pashto</h3></a>
        <p>This project  a one of a kind dictionary of my mother tongue Pashto was born out of a greater objective of
           digitizing Pashto language and literature.</p>
      </div>
    );
  }
}






