import React, { Component } from 'react'
import {Link} from "react-router-dom"
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className = 'Navbar'>
                    <h1>QUIZ GAME</h1>
                </div>
                <div className ='index'>
                    <h2>Home</h2>
                    <nav>
                        <ul>
                            <li className = 'item'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className = 'item'> 
                                <Link to="/play/">Play</Link>
                            </li>
                            <li className = 'item'>
                                <Link to = "/practice">Practice</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
