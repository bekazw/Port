import React from 'react'
import './Arrow.css'

export default class Arrow extends React.Component {
    constructor(props) {
        super (props);
    }
    render() {   
        return (
            <div className={"SliderArrow"+ this.props.direction}>
            </div>
        )
    }
}