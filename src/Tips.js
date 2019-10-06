import React, { Component } from 'react'
import './App.css';

export default class Tips extends Component {
    render() {
        let text =[]
        if (this.props.question.tips.length === 0) {
            text.push("No tips for this quiz")
        }else{
            this.props.question.tips.map((tip) => {
                text.push(tip.tip)
            })
        }
        return (
            <div>
                <li>Tips</li>
                {text.map((tip) => {
                return(
                    <p>
                        <ul>{tip}</ul>      
                    </p>)
                }
                )}
            </div> 
        )
    }      
}