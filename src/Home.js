import React, { Component } from 'react'
import {
    Link
  }
  from "react-router-dom"

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className = 'Navbar'>
                    <h1>QUIZ GAME</h1>
                </div>
                <h2>Home</h2>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li><Link to="/play/">Play</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
