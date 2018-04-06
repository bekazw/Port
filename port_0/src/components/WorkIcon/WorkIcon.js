import React from 'react';
import './WorkIcon.css';

export default class WorkIcon extends React.Component {
    render() {
        return (
            <div className = "WorkIcon" 
                 style = {{ left : this.props.left}}>
                 <img className = "innerImg" src={this.props.Icn} />
                 {this.props.text}
            </div>
        )
    }
}