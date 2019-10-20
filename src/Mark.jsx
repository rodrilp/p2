import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import './App.css';

export default class Mark extends Component {
    render() {
        return (
            <div className = "mark" style = {{  backgroundColor: "rgb(189, 241, 233)"}}>
                Has acertado {this.props.score} preguntas!
                <p>
                <Button variant="success"
                        onClick = {()=> this.props.onReset()}>Play Again
                </Button>
                </p>
            </div>
        )
    }
}