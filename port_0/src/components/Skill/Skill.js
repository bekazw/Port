import React from 'react';
import './Skill.css';

export default class Skill extends React.Component {
    constructor (props) {
        super (props)
    }
    render() {       
        return (
            <div className = "skill" style = {{left : ""+this.props.AllLeft+"px"}}>
                <p className = "skillTextUp">{this.props.skillTextUp}</p>
                  <div className = "skillImage" ></div>
                <p className = "skillTextDown">{this.props.skillTextDown}</p>
            </div>
        )
    }
}

