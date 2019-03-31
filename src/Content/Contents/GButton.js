import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Content.css'

class GButton extends Component {
    render() {
        return (
            <div>
                <div id="Block" class="jumbotron" >
                    <div class="jumbotron-inner">
                        <div class="jumbotron-item active">
                            <div class="jumbotron-caption ">
                                <h1 class="animated zoomIn delay-2s" align='center'>ยินดีต้อนรับเข้าสู่ <br />ระบบฐานข้อมูลของผู้สูงอายุ ภายในจังหวัดภูเก็ต</h1>

                            </div>
                        </div>
                    </div>
                </div>


                <div class="container-fluid" align="center" >
                    <div id="font" class="row" >
                        <div class="col-lg-1" >

                        </div>

                        <div class="col-lg-2" >
                            <a href="/News" ><button type="button" class="btn btn-primary">ข้อมูลทางสถิติ</button></a>
                        </div>

                        <div class="col-lg-2" >
                            <a href="/Activities" ><button type="button" class="btn btn-primary">การดูเเลผู้สูงอายุ</button></a>
                        </div>

                        <div class="col-lg-2" >
                            <a href="#" ><button type="button" class="btn btn-primary">เบี้ยยังชีพผู้สูงอายุ</button></a>
                        </div>

                        <div class="col-lg-2" >
                            <a href="#"><button type="button" class="btn btn-primary">ปัญหาสุขภาพ</button></a>
                        </div>

                        <div class="col-lg-2" >
                            <a href="/Wecare" ><button type="button" class="btn btn-primary">โรงพยาบาล</button></a>
                        </div>

                        <div class="col-lg-1" >

                        </div>
                        <br />  <br />  <br />  <br />


                    </div>
                </div>


            </div>
        )
    }

}
export default GButton
