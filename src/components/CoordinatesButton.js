// Code CoordinatesButton Component Here
import React from 'react'
 

class CoordinatesButton extends React.Component {
    
    eventHandler = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }
    render() {
        return <button onClick={this.eventHandler}> </button>;
    }

}

export default CoordinatesButton;