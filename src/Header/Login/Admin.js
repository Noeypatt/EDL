import React, { Component } from 'react';
import Baremail from './Baremail'
import './Login.css'


class Addmin extends Component {
    render() {
        return (
            <div className="BGL1">
                <Baremail />
                <div  class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <br /><br /><br /><br />
                            <br />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4">

                        </div>

                        <div class="col-lg-4">
                            <div id="Box" class="jumbotron">
                                <h1 class="display-4">Login Admin</h1>
                                <h6 class="lead">สำหรับเจ้าหน้าที่</h6><br />

                                <a href="https://docs.google.com/spreadsheets/d/1lTvlri1R_Jjt6_YnhvwnDxYCnNXJHHXaJxEOqETOwi0/edit?usp=sharing" 
                                class="btn btn-danger btn-lg active" role="button" aria-pressed="true">Login with Gmail</a>

                            </div>
                        </div>

                        <div class="col-lg-4">

                        </div>



                    </div>

                </div>
            </div>
        );
    }

}
export default Addmin;

/**/