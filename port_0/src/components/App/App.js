import React, { Component } from 'react';
import './App.css';

import Logo from '../Logo/Logo';
import BarElement from '../NavBar/NavBarElement/BarElement';
import Skill from '../Skill/Skill'
import WorkIcon from '../WorkIcon/WorkIcon';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <BarElement NavBarTitle="About"      left="1000px" />
        <BarElement NavBarTitle="Samples"    left="1150px" />
        <BarElement NavBarTitle="PocketBook" left="1300px" />   
      
        <p> I'm good at: </p>
        <Skill 
          AllLeft = "120"  
          skillTextDown = "HTML\CSS\JS"   
          skillTextUp = "FrontEnd"
          bI = "bi1"
        />
        <Skill 
          AllLeft = "540"  
          skillTextDown = "React"        
          skillTextUp = "FrontEnd"
          bI = "bi2"
        />
        <Skill 
          AllLeft = "960"  
          skillTextDown = "Angular" 
          skillTextUp = "FrontEnd"
          bI = "bi3"
        />
        <Skill 
          AllLeft = "1380" 
          skillTextDown = "Python" 
          skillTextUp = "BackEnd"
          bI = "bi4"
        />
        <WorkIcon left = "170px"/>
        <WorkIcon left = "420px"/>
        <WorkIcon left = "670px"/>
        <WorkIcon left = "920px"/>
        <WorkIcon left = "1170px"/>
        <WorkIcon left = "1420px"/>        
        </div>
    );
  }
}

