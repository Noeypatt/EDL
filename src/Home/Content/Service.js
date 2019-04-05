import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Service.css'
import wheelchair from './img/logo/wheelchair.svg'
import docter from './img/logo/docter.svg'
import hospital from './img/logo/hospital.svg'
import file from './img/logo/file1.svg'
import doc from './img/logo/doc1.svg'
import car from './img/logo/car.svg'
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
// const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

class Service extends Component {

    render() {
        return (
            <div>
                <div id="Helpcenter" className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Service of you</h1>
                            <br /><br />
                        </div>
                    </div>

                    <div id="Helpchoice" className="container-fluid">
                        <div className="row">

                            <div className="col-lg-3 col-sm-6 col-xs-6">
                                <a href="#"><img className="pic" src={wheelchair} width="50px" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">บริการดูแลผู้สูงอายุ</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-xs-6">
                                <a href="#"><img className="pic" src={docter} width="50px" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">การตรวจสุขภาพ</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-xs-6">
                                <a href="#"><img className="pic" src={hospital} width="50px" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">โรงพยาบาลใกล้บ้าน</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-xs-6">
                                <a href="#"><img className="pic" src={file} width="50px" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">โรคควรระวัง</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-xs-6">
                                <a href="#"><img className="pic" src={doc} width="50px" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">เอกสารที่จำเป็น</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>


                            <div className="col-lg-3 col-sm-6 col-xs-6">
                                <a href="#"><img className="pic" src={car} width="50px" /></a>
                                <div className="card-body">
                                    <h5 className="card-title">สายด่วน เหตุฉุกเฉิน</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

                {/* <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar type="monotone" dataKey="uv" fill="#8884d8" barSize={30} />
                </BarChart> */}

            </div>
        );
    }
}
export default Service;
