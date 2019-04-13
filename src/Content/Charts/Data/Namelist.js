import React, { Component } from 'react';
import Tabletop from 'tabletop';
import '../../Content.css'
import { BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar } from 'recharts';

class Namelist extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Tabletop.init({
            key: '1lTvlri1R_Jjt6_YnhvwnDxYCnNXJHHXaJxEOqETOwi0',
            callback: googleData => {
                this.setState({
                    data: googleData
                })

            },
            simpleSheet: true
        })
    }
    
    render() {
        const { data } = this.state

        return (
            <div id="fontb">

                <BarChart className="animated  zoomIn delay-3s" width={550} height={250} data={data}>
                    <CartesianGrid strokeDasharray="0 0" />
                    <XAxis dataKey="อำเภอ" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="อายุ60ถึง69ปี" fill="#194d33" />
                    <Bar dataKey="อายุ70ถึง79ปี" fill="#388e3c" />
                    <Bar dataKey="อายุ80ถึง89ปี" fill="#4caf50" />
                    <Bar dataKey="อายุมากกว่าหรือเท่ากับ90ปี" fill="#81c784" />
                </BarChart>

            </div>

        )
    }
}

export default Namelist
