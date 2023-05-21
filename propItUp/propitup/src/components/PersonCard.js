import React, { Component } from 'react';

    
class PersonCard extends Component {
    render() {
        return(
        <div>
            <h1>{this.props.firstName} {this.props.lastName}</h1>
            <p>Age: {this.props.age}</p>
            <p>Haircolor: {this.props.haircolor}</p>
        </div>
        );
    }
}
    
export default PersonCard;
