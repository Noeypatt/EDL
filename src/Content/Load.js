import React, { Component } from 'react'
import load from "./img/load4.gif"


class Load extends Component {
    render() {
        return (
            <div className="Load">
                <img src={load} />
            </div>
        );
    }
}

export default Load

