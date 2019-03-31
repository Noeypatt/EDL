import React, { Component } from 'react';
import Bar from './Bar'
import './Login.css'


class Addmin extends Component {
    render() {
        return (
            <div className="BGL">
                <Bar />
                <div id="Box" class="container-fluid">
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
                            <div class="jumbotron">
                                <h1 class="display-4">Login Addmin</h1>
                                <p class="lead">สำหรับเจ้าหน้าที่</p><br />

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