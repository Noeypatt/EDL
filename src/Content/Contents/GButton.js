import React, { Component } from 'react';
import '../Content.css'

class GButton extends Component {
    render() {
        return (
            <div >
                <div class="container-fluid" >
                    <div class="row" >
                        <div class="col-lg-12" >
                            <div >
                                <br/>
                                <h1 align='center'>ยินดีต้อนรับเข้าสู่ <br/>ระบบฐานข้อมูลของผู้สูงอายุ ภายในจังหวัดภูเก็ต</h1>
                                <br /> <br/>

                                <div class="font" class="container-fluid" align="center" >
                                    <div class="row" >
                                    <div class="col-lg-1" >
                                            
                                        </div>

                                        <div className="font" class="col-lg-2" >
                                            <a  href="/News" ><button  type="button" class="btn btn-primary">เรื่องเล่าวันใหม่</button></a>
                                        </div>

                                        <div class="col-lg-2" >
                                            <a href="/Activities" ><button  type="button" class="btn btn-primary">การดูเเลผู้สูงอายุ</button></a>
                                        </div>

                                        <div class="col-lg-2" >
                                            <a href="#" ><button  type="button" class="btn btn-primary">เบี้ยยังชีพผู้สูงอายุ</button></a>
                                        </div>

                                        <div class="col-lg-2" >
                                            <a href="/Health"><button  type="button" class="btn btn-primary">ปัญหาสุขภาพ</button></a>
                                        </div>

                                        <div class="col-lg-2" >
                                            <a href="/Wecare" ><button  type="button" class="btn btn-primary">Wecare</button></a>
                                        </div>

                                        <div class="col-lg-1" >
                                            
                                        </div>
                                        <br/>  <br/>  <br/>  <br/>
                                        <br/>  <br/>  <br/>  <br/>
                                        <br/>  <br/>  <br/>  <br/>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }

}
export default GButton
