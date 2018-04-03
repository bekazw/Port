import React from 'react';
import "./BarElement.css";

export default class BarElement extends React.Component {
    render() {       
        return (
            <div style = { {left: this.props.left} }  className="NavBarElement">
                <p className="NavTitle">{this.props.NavBarTitle}</p>
            </div>
        )
    }
}