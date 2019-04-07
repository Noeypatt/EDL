import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Barin from './Barin'
import '../Content.css'
import Tabletop from 'tabletop';
import { Progress } from 'reactstrap';


class Disease extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Tabletop.init({
            key: '1EMLOUvKUe8BQwcsrgy_61kHv4JqWIYECWp1bfG9AXJA',
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
            <div id="font" >
                <Barin />
                <br />
                <div id="Helpcenter" className="container-fluid">
                    <div className="row">

                        {data.map(obj => (
                            <div id="font" className="col-lg-7">
                                <div className="text-center">{obj.โรค}</div><br />
                                <Progress  multi >

                                    <Progress bar animated color="success" value={obj.เพศชาย}>เพศชาย: {obj.เพศชาย} คน</Progress>
                                    <Progress bar animated color="warning" value={obj.เพศหญิง}>เพศหญิง: {obj.เพศหญิง} คน</Progress>

                                </Progress>

                            </div>
                        ))}
        
                        <div className="col-lg-5 col-xl-5">
                        </div>

                    </div>
                </div>

            </div>
        )


    }
}
export default Disease;