import React from 'react';
import './Arrow.css';

export default class Arrow extends React.Component {
    render() {
        return (
            <div className={"Arrow "+this.props.direction} >

            </div> 
        )
    }
}