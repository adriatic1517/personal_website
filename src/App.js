
import './App.css';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="Portfolio">
        <Name />
        <Portrait  />
  
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
  render(){
    return(
    <div className="Portrait">
      <img src="portrait.jpg" alt='me with a grad cap'/>
      </div>
    );
  }
}

class AboutMe extends React.Component {
  render(){
    return (
      <div className="AboutMe" id = "About Me">

        <p>Hello! I recently graduated from the University of California Berkeley, majoring
        in Political Economy and Data Science.</p>

        <p>I like to play the Rabab, go hiking, play tennis and drink chai. I also enjoy travelling,
          working with people and places that have a nice view.
        </p>

        <p> You might be interested in my:<br /><a href="https://docs.google.com/document/d/1eS-WCB-3v6jgQPzVzHu01ZUovurUX6oi28DjebbdiQ8/edit?usp=sharing"
          >Resume</a> or <a href="https://www.linkedin.com/in/emad-siddiq-2b9979164/"> LinkedIn</a></p>

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
          <li> <a href = "http://emad-resume.herokuapp.com/day1.html"
            </a></li>
          
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
        <p>This project was born out of a desire to give my friends and family a positive outlook when there was nothing
          but upsetting pieces on newspapers main pages. Therefore, I used Sentiment Analysis on major news sources and gathered the
          positive articles from within on one website for my friends to view. </p>

        <a href = "https://ocf.berkeley.edu/~emadsiddiq/pashto"><h3>Dictionary of Pashto</h3></a>
        <p>This project  a one of a kind dictionary of my mother tongue Pashto was born out of a greater objective of
           digitizing Pashto language and literature. I see this project as a start of creating more products that can
            bridge the linguistic gap between the millions in the non-English speaking parts of the world and help 
            bring us closer together through literature.</p>
      </div>
    );
  }
}




