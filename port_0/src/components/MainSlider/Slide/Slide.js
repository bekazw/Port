import React from 'react';
import './Slide.css';

export default class Slide extends React.Component {
    constructor(props) {
        super (props)
    }

    render() {
        return (
            <div className = {"SlideElement Slide"+this.props.slideNum}>
                {this.props.slideText}
            </div>
        )
    }
}