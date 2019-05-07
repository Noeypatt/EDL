import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Barin from './BarIn'
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
            <div  >
                <Barin />
                <br /> 
                <div id="Helpcenter" className="container-fluid">
                <div className="row">
                <div id="fontb" className="col-lg-12">
                 <h3>5 อันดับโรคควรระวังในผู้สูงอายุ</h3><br/>
                </div>
                </div>
               

               
                    <div className="row">
                    
                    

                        {data.map(obj => (
                            
                            <div id="fontb" className="col-lg-7">
                                <div className="text-left">{obj.โรค}</div>
                                <Progress multi >

                                    <Progress bar animated color="success" value={obj.เพศชาย}>เพศชาย: {obj.เพศชาย} คน</Progress>
                                    <Progress bar animated color="warning" value={obj.เพศหญิง}>เพศหญิง: {obj.เพศหญิง} คน</Progress>
                                   
                                </Progress> <br/>

                            </div>
                        ))}

                        <div className="col-lg-3 col-xl-5">
                        </div>

                    </div>
                </div>

            </div>
        )


    }
}
export default Disease;