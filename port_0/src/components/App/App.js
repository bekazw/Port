import React, { Component } from 'react';
import './App.css';

import Logo from '../Logo/Logo';
import BarElement from '../NavBar/NavBarElement/BarElement';
import Skill from '../Skill/Skill'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <BarElement NavBarTitle="About"      left="1000px" />
        <BarElement NavBarTitle="Samples"    left="1150px" />
        <BarElement NavBarTitle="PocketBook" left="1300px" />   
      
        <p classname > I'm good at: </p>
        <Skill AllLeft = "120"  skillTextDown = "HTML\CSS\JS"   skillTextUp = "FrontEnd"/>
        <Skill AllLeft = "540"  skillTextDown = "React"     skillTextUp = "FrontEnd" />
        <Skill AllLeft = "960"  skillTextDown = "Angular"  skillTextUp = "FrontEnd"/>
        <Skill AllLeft = "1380" skillTextDown = "Python" skillTextUp = "BackEnd"/>
      </div>
    );
  }
}

