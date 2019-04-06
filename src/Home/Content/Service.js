import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Service.css'
import wheelchair from './img/logo/wheelchair.svg'
import docter from './img/logo/docter.svg'
import hospital from './img/logo/hospital.svg'
import file from './img/logo/file1.svg'
import doc from './img/logo/doc1.svg'
import car from './img/logo/car.svg'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

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
                                <a href="/Hospital"><img className="pic" src={hospital} width="50px" /></a>
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
                               <img onClick={this.toggle} className="pic" src={car} width="50px" />{this.props.buttonLabel}
                                <div className="card-body">
                                    <h5 className="card-title">สายด่วน เหตุฉุกเฉิน</h5>
                                   
                                    <Modal id="font" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                        <ModalHeader toggle={this.toggle}><h5>สายด่วน</h5></ModalHeader>
                                        <ModalBody>
                                            <p>สายด่วน 1669</p>
                                        </ModalBody>
                                        {/* <ModalFooter>
                                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                        </ModalFooter> */}
                                    </Modal>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
export default Service;
