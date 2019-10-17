import React, { Component } from 'react'
import imagen from './no-foto.png'
import "./App.css"

export default class Photo extends Component {
    render() {
        if(this.props.question.attachment !== null ){
            return (
                <div className = "photo">
                    <img className = "foto" src={this.props.question.attachment.url} alt='Foto de la capital'/>
                </div>
            )
        } else{
            return(
                <div className = "photo">
                    <img className = "foto" src={imagen} alt='No existe foto'/>
                </div>
            )
        }
    }
}
