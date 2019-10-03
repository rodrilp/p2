import React, { Component } from 'react'
import Question from "./Question"
export default class Game extends Component {
    render() {
        return (
            <div>
                <Question question = {this.props.question}
                            imagen = {this.props.question.attachment.url}/>
            </div>
        )
    }
}
