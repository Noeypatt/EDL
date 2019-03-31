import React, { Component } from 'react'
import '../Content.css'
import Barin from './BarIn'


class Activities extends Component {
    render() {
        return (
            <div id ="font" >
                <Barin/>
                <br />
                <h4 id = "Block" >หน่วยงานดูเเลผู้สูงอายุ</h4><br />

                <div  class="container-fluid" >
                    <div class="row" >

                        <div class="col-lg-4">
                            <img src="http://phuket.dop.go.th/images/logo1.png" width="20px" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">ศูนย์พัฒนาการจัดสวัสดิการสังคมผู้สูงอายุภูเก็ต</h5>
                                {/* <p class="card-text">เช่น การเดิน ปั่นจักรยาน</p><br/> */}
                                <h6>ข่าวประชาสัมพันธ์ <a href="http://phuket.dop.go.th/publicizes"><img src = "https://image.flaticon.com/icons/svg/174/174240.svg" width="30px"/></a></h6>
                                <a href="http://phuket.dop.go.th/index"><button type="button" class="btn btn-primary">อ่านต่อ</button></a>
                            </div>
                        </div>

                    </div>
                </div>

                <br /><br />

                <div className = "font" class="container-fluid" >
                    <div class="row" >

                       
                    </div>
                </div>


            </div>
        )
    }
}
export default Activities