import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
//import './App.css'

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
                    <Button variant="success"
                            onClick = {()=> this.props.onReset()}>Reset
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                     <Button variant="success"
                             onClick = {() => this.props.onChangeNumber(0)}>1
                     </Button>
                     <Button variant="success"
                             onClick = {() => this.props.onChangeNumber(1)}>2
                     </Button>
                     <Button variant="success"
                             onClick = {() => this.props.onChangeNumber(2)}>3
                     </Button>
                     <Button variant="success"
                             onClick = {() => this.props.onChangeNumber(3)}>4
                     </Button>

                     <Button variant="success"
                             onClick = {() => this.props.onChangeNumber(4)}>5
                     </Button>
                     <Button variant="success"
                             onClick = {() => this.props.onChangeNumber(5)}>6
                     </Button>
                     <Button variant="success"
                             onClick = {() => this.props.onChangeNumber(6)}>7
                     </Button>
                     <Button variant="success"
                             onClick = {() => this.props.onChangeNumber(7)}>8
                     </Button>
                     <Button variant="success"
                             onClick = {() => this.props.onChangeNumber(8)}>9
                     </Button>
                     <Button variant="success"
                             onClick = {() => this.props.onChangeNumber(9)}>10
                     </Button>
                        
                </ButtonGroup>
            </div>
        )
    }
}
