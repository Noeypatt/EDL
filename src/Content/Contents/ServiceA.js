import React, { Component } from 'react'
import '../../Content/Content.css'
import Barin from './BarIn';
import { Jumbotron, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


class ServiceA extends Component {
    render() {
        return (
            
            <div className="font">
            
            <Barin />
                <br />
                <h1>การบริการ</h1>
                <br /><br />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-1">
                        </div>

                        <div className="col-lg-4">
                            <Jumbotron>
                                <h3>คู่มือประชาชน</h3>
                                <p className="lead">ศูนย์รวมข้อมูลเพื่อติดต่อราชการ</p>
                                <hr className="my-2" />
                                <p>หัวข้อที่ถูกค้นหาบ่อย</p>
                                <p className="lead">

                                    <Button color="primary" id="toggler1" >เบี้ยยังชีพผู้สูงอายุ</Button><br /><br />
                                    <Button color="primary" id="toggler2" >อัตราเบี้ยยังชีพผู้สูงอายุ</Button><br /><br />
                                    <Button color="primary" id="toggler3" >ผู้ถือสิทธิเเทน</Button><br /><br />
                                    <Button color="primary" id="toggler4" >บัตรประชาชน</Button><br /><br />
                                </p>
                            </Jumbotron>
                        </div>

                        <div className="col-lg-1">
                        </div>

                        <div className="col-lg-5">
                            <UncontrolledCollapse toggler="#toggler1">
                                <Card>
                                    <CardBody >
                                        <h3>เบี้ยยังชีพผู้สูงอายุ</h3>
                                        <p>เบี้ยยังชีพผู้สูงอายุ คือ สวัสดิการที่รัฐมีไว้เพื่อช่วยเหลือผู้สูงอายุที่มีอายุ 60 ปีขึ้นไป เพื่อเป็นเงินช่วยเหลือ และแบ่งเบาภาระค่าใช้จ่ายการดำรงชีวิตในแต่ละเดือน</p>
                                        <div id="Cardtext">

                                            <strong>ผู้มีสิทธิได้รับเบี้ยยังชีพผู้สูงอายุ</strong>
                                            <p>สำหรับคุณสมบัติของผู้ที่จะได้รับเงินช่วยเหลือต้องมีเกณฑ์ ดังต่อไปนี้<br />
                                                - มีสัญชาติไทย<br />
                                                - มีอายุ 59 ปีบริบูรณ์ขึ้นไป<br />
                                                - ต้องไม่เคยได้รับสิทธิประโยชน์จากหน่วยงานของรัฐหรือรัฐวิสาหกิจ  </p>

                                            <strong>การลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ 2561</strong>
                                            <p>สำหรับผู้สูงอายุที่มีคุณสมบัติตามเกณฑ์ที่กำหนด สามารถไปลงทะเบียนรับเบี้ยยังชีพด้วยตัวเอง ได้ตั้งแต่วันที่ 1-30 พฤศจิกายน ของทุกปี
                                                โดยผู้สูงอายุในกรุงเทพฯ ลงทะเบียน ณ สำนักงานเขตที่มีชื่ออยู่ในทะเบียนบ้าน<br />
                                                ส่วนต่างจังหวัดยื่นได้ที่สำนักงานเทศบาล หรือองค์การบริหารส่วนตำบล (อบต.) ที่อยู่ในทะเบียนบ้าน<br />
                                                โดยผู้สูงอายุสามารถเลือกรับเงินเบี้ยยังชีพผ่านทางช่องทางได้ตามนี้<br />
                                                - รับเป็นเงินสดด้วยตนเอง <br />
                                                - ให้ผู้แทนที่ได้รับมอบอำนาจรับแทน<br />
                                                - โอนเข้าบัญชีธนาคารในนามของผู้สูงอายุ<br />
                                                - โอนเข้าบัญชีธนาคารในนามของผู้แทนที่ได้รับมอบอำนาจจากผู้สูงอายุ</p>

                                            <strong>หลักฐานในการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</strong>
                                            <p>
                                             1. บัตรประจำตัวประชาชนตัวจริงพร้อมสำเนา หรือบัตรอื่นที่ออกโดยหน่วยงานของรัฐที่มีรูปถ่าย <br />
                                             2. ทะเบียนบ้านตัวจริงพร้อมสำเนา <br />
                                             3. สมุดบัญชีเงินฝากธนาคารตัวจริงพร้อมสำเนา สำหรับผู้ขอรับเงินผ่านธนาคาร <br />
                                             กรณีที่ผู้สูงอายุไม่สามารถมาจดทะเบียนได้ด้วยตนเอง สามารถมอบอำนาจเป็น<br />ลายลักษณ์อักษรให้ผู้ถือสิทธิเเทนได้
                                             
                                            </p>
                                        </div>

                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>{}

                            <UncontrolledCollapse toggler="#toggler2">
                                <Card>
                                    <CardBody >
                                        <h3>อัตราเบี้ยยังชีพที่ผู้สูงอายุจะได้รับ</h3><br/>
                                        <div id="Cardtext">
                                        <strong>การจ่ายเบี้ยยังชีพผู้สูงอายุ</strong>
                                            <p>ปัจจุบันการจ่ายเบี้ยยังชีพผู้สูงอายุ จะเป็นแบบขั้นบันไดตามช่วงอายุ โดยผู้สูงอายุจะได้รับเงิน ช่วยเหลือเป็นรายเดือนต่อเนื่องไปจนกว่าจะเสียชีวิต ซึ่งแบ่งได้ตามนี้ <br />
                                            - ช่วงอายุ 60 - 69 ปี ได้รับเงิน 600 บาทต่อเดือน <br />
                                            - ช่วงอายุ 70 - 79 ปี ได้รับเงิน 700 บาทต่อเดือน <br />
                                            - ช่วงอายุ 80 - 89 ปี ได้รับเงิน 800 บาทต่อเดือน <br />
                                            - ช่วงอายุ 90 ปีขึ้นไป ได้รับเงิน 1,000 บาทต่อเดือน <br />
                                            ทั้งนี้ ผู้สูงอายุที่ลงทะเบียนในปี 2561 จะเริ่มได้รับเบี้ยยังชีพงวดแรกตั้งแต่เดือนตุลาคม 2562 เป็นต้นไป</p>

                                        </div>
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>


                            <UncontrolledCollapse toggler="#toggler3">
                                <Card>
                                    <CardBody>
                                        <p>บัตรประชาชน</p>
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>

                           
                        </div>

                        <div className="col-lg-1">
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default ServiceA