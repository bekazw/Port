import React from 'react'
import './Arrow.css'

import { connect } from 'react-redux';

import {
    r_slide
  } from '../../../actions/redux';
  

export class Arrow extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            currentSlide : 1
        }
    }
    slideElement = () => {
        console.log("Moveee")
        this.setState ({
            currentSlide : 10
        })
    }

    render() {   
        return (
            <div className={"SliderArrow"+ this.props.direction} onClick = {this.slideElement}>
            </div>
        )
    }
}

const MapStateToProps = (state, ownProps) => ({
    currentSlide: state.currentSlide
  });
  
  const MapDispatchToProps = dispatch => {
      return {
        slideElement : nnn => dispatch(r_slide(nnn))
      };
  }
  
  const ArrowContainer = connect(
      MapStateToProps,
      MapDispatchToProps
  )(Arrow);
  
  export default ArrowContainer;
  