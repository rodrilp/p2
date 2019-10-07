import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './App.css'

export default class Botonera extends Component {
    render() {
        return (
            <div>
                <ButtonGroup className = "botonera" aria-label="Basic example">
                    <Button variant="success"
                            onClick = {()=> this.props.onSubmit()}
                            disabled = {this.props.currentQuestion !== (this.props.length -1)}>Submit
                    </Button>
                    <Button variant="success"
                            onClick = {()=> this.props.onChangequestion(false)}
                            disabled = {this.props.currentQuestion === 0}>Previous
                    </Button>
                    <Button variant="success"
                            onClick = {()=> this.props.onChangequestion(true)}
                            disabled = {this.props.currentQuestion === (this.props.length -1)}>Next
                    </Button>
                </ButtonGroup>
            </div>
        )
    }
}
