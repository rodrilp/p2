import React, { Component } from 'react'
//import './App.css';

export default class Tips extends Component {
    render() {
        var list;
        if (this.props.question.tips.length === 0) {
            list = "No tips for this quiz";
        }else{
            list = this.props.question.tips.map((tip, index) => 
                <li key={index}>{tip}</li>            
            );
        }
        return (
            <div>
                <h5>Tips</h5>  
                    {list}
            </div> 
        )
    }      
}