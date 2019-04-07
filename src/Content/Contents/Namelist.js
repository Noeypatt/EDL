import React, { Component } from 'react';
import Tabletop from 'tabletop';
import { Table } from 'reactstrap';
import '../Content.css'
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
            <div id="font">

                <h1 align="center" className="animated  zoomIn delay-2s" >ยอดผู้ได้รับเบี้ยยังชีพ ประเภทผู้สูงอายุ</h1>
                <br />

                <BarChart  className="animated  zoomIn delay-3s" width={550} height={250} data={data}>
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

                {/* <h1 align="center" className="animated  zoomIn delay-2s" >ตารางยอดผู้ได้รับเบี้ยยังชีพ ประเภทผู้สูงอายุ</h1>
                <br />
                <Table borderless>
                    <thead>
                        <tr>
                            <th>จังหวัด</th>
                            <th>อำเภอ</th>
                            <th>อปท.</th>
                            <th>60-69 ปี</th>
                            <th>70-79 ปี</th>
                            <th>80-89 ปี</th>
                            <th>อายุ 90 ปีขึ้นไป</th>
                            <th>รวม</th>
                            <th>จำนวนเงินทั้งสิ้น</th>
                        </tr>
                    </thead>

                    {data.map(obj => (
                        <tbody>
                            <tr>
                                <th scope="row">{obj.จังหวัด}</th>
                                <td>{obj.อำเภอ}</td>
                                <td>{obj.อปท}</td>
                                <td>{obj.อายุ60ถึง69ปี}</td>
                                <td>{obj.อายุ70ถึง79ปี}</td>
                                <td>{obj.อายุ80ถึง89ปี}</td>
                                <td>{obj.อายุมากกว่าหรือเท่ากับ90ปี}</td>
                                <td>{obj.รวม}</td>
                                <td>{obj.จำนวนเงินทั้งสิ้น}</td>
                            </tr>

                        </tbody>
                    ))}
                </Table> */}



            </div>

        )
    }
}

export default Namelist
