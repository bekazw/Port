import React, { Component } from 'react';
import './App.css';

import Logo from '../Logo/Logo';
import BarElement from '../NavBar/NavBarElement/BarElement';
import MainSlider from '../MainSlider/MainSlider'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <BarElement NavBarTitle="About" left="1000px" />
        <BarElement NavBarTitle="Samples" left="1150px" />
        <BarElement NavBarTitle="PocketBook" left="1300px" />
        <MainSlider />
      </div>
    );
  }
}

