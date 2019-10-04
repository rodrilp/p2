import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './App.css'

export default class Botonera extends Component {
    render() {
        return (
            <div>
                <ButtonGroup className = "botonera" aria-label="Basic example">
                    <Button variant="success">Submit</Button>
                    <Button variant="success"
                            onClick = {()=> this.props.onChangequestion(false)}>Previous
                    </Button>
                    <Button variant="success"
                            onClick = {()=> this.props.onChangequestion(true)}>Next
                    </Button>
                </ButtonGroup>
            </div>
        )
    }
}
