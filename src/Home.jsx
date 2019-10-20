import React, { Component } from 'react'
import {Link} from "react-router-dom"
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className ='index'>
                <nav>
                    <ul className = 'menu'>
                        <ul className = 'item'> 
                            <Link to="/play/"><button className= "boton1" >Play</button></Link>
                        </ul>
                        <ul className = 'item'>
                            <Link to = "/practice"><button className= "boton2" >Train</button></Link>
                        </ul>
                    </ul>
                </nav>
                <footer> </footer>
            </div>
        )
    }
}
