

import React from 'react';
import styles from '../styles/Main.module.css';


export default class App extends React.Component {
  render() {
    return (
      <div className={styles.Portfolio}>
   
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
      <div className={styles.Portrait}>
         <img src="/portrait.png" alt = ""></img>
      </div>
    );
  }
}


class Name extends React.Component {
  render(){
    return (
      <div className={styles.Name}>
         <h1> Emad Siddiq </h1>
      </div>
    );
  }
}






class AboutMe extends React.Component {
  render(){
    return (
      <div className={styles.AboutMe} id = "About Me">
        
        <p className="hello">Hello &#128075;</p>
        

        <p> 
          I am interested in AI, ML and blockchain technologies. I studied Political Economy & Data Science during my undergraduate at UC Berkeley and work as a Software Engineer now.</p>


        <p className= "Links">
           <a href="Emad_Siddiq_Resume.pdf">Resume</a> |
           <a href="https://www.linkedin.com/in/emad-siddiq-2b9979164/"> LinkedIn </a> |
           <a href="/blog/index.html"> GitHub</a> |
           <a href="/blog"> Blog</a>
          
            </p>
        


    </div>
    );
  }
}

