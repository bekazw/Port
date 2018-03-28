import React from 'react'
import "./MainSlider.css"

import Arrow from './Arrows/Arrow';
import Slide from './Slide/Slide';

import { connect } from 'react-redux';

export class MainSlider extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            slide1Number : 1,
            slide2Number : 2,
            currentSlide : -1
        }        
    }     
    render() {       
        
        return (
            <div className="MainSlider">          
                
                <Slide slideNum = {""+this.state.slide1Number} slideText = "Slide text #1" />   
                <Slide slideNum = {""+this.state.slide2Number} slideText = "Slide text #2" />         
                
                <Arrow direction="L" />
                <Arrow direction="R" />
                
                <p>asdsad{this.state.currentSlide} </p>
    
            </div>
        )
    }    
}



const MapStateToProps = (state, ownProps) => ({
    currentSlide: state.currentSlide
  });

const MainSliderContainer = connect (
    MapStateToProps
)(MainSlider);

export default MainSliderContainer;