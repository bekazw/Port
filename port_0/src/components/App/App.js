import React, { Component } from 'react';
import './App.css';

import Logo from '../Logo/Logo';
import BarElement from '../NavBar/NavBarElement/BarElement';
import Skill from '../Skill/Skill'
import WorkIcon from '../WorkIcon/WorkIcon';
import Arrow from '../Arrow/Arrow';


import Icn0 from './imgs/SiteIcons/SiteIcon0.png';
import Icn1 from './imgs/SiteIcons/SiteIcon1.png';
import Icn2 from './imgs/SiteIcons/SiteIcon2.png';
import Icn3 from './imgs/SiteIcons/SiteIcon3.png';
import Icn4 from './imgs/SiteIcons/SiteIcon4.png';
import Icn5 from './imgs/SiteIcons/SiteIcon5.png';

export default class App extends Component {  
  render() {
    //loading works to slider from json. Now - manual
    const workIconSet = [];
    const worksTitle = [
      "Site0", "Site1", "Site2", "Site3","Site4", "Site5", "Site6"
    ];
    const works = [
      Icn0, Icn1, Icn2, Icn3, Icn4, Icn5,Icn5
    ];
    let i =0;
    works.forEach (ele => {
      workIconSet.push(<WorkIcon left = {i*250+165+"px"} text={""+worksTitle[i]} Icn={works[i]}/>);
      if (i<5) {
        i+=1;
      }      
    })

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
        {workIconSet}    
        
        <Arrow direction = 'aleft' />
        <Arrow direction = 'rleft' />

        
        </div>
    );
  }
}

