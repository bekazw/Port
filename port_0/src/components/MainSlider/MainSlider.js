import React from 'react'
import "./MainSlider.css"

import Arrow from './Arrows/Arrow';
import Slide from './Slide/Slide';

export default class MainSlider extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            slide1Number : 1,
            slide2Number : 2
        }
        this._slideElement = this._slideElement.bind(this)
    }   

    _slideElement = () => {
        console.log("MOVe");
        this.setState ({
            slide1Number: 2,
            slide2Number: 1
        })
    }    
    render() {       

        return (
            <div className="MainSlider">          
                
                <Slide slideNum = {""+this.state.slide1Number} slideText = "Slide text #1" />   
                <Slide slideNum = {""+this.state.slide2Number} slideText = "Slide text #2" />         
            
                <Arrow direction="L" />
                <Arrow direction="R" />
    
            </div>
        )
    }    
}
