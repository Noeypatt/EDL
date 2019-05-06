import React, { Component } from 'react'
import load from "./img/load4.gif"
import './Content.css'


class Load extends Component {
    render() {
        return (
            <div className="BG-color">
                <img className="Load" src={load} />
            </div>
        );
    }
}

export default Load

