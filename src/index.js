import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Home from './Home/Home'
import Admin from './Header/Login/Admin'
import About from './Header/Contents/About'
import Contact from './Header/Contents/Contact'
import AboutA from './Content/Contents/AboutA'
import AboutH from './Content/Contents/AboutH'
import ServiceA from './Content/Contents/ServiceA'


import Expand from './Header/Contents/Expand'
import Hospital from './Content/Contents/Hospital'
import Disease from './Content/Contents/Disease'
import HospitalHome from './Content/Contents/HospitalHome'

import App from './App'





import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()


ReactDOM.render(
    <Router history={customHistory}>
        <div>
            <header>
            <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
                <link href="https://fonts.googleapis.com/css?family=Pacifico|Prompt|Courgette" rel="stylesheet" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />

                <link rel="stylesheet" href="animate.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"/>

                {/* <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script> */}

            </header>

            <Route exact path="/" component={Home} />
            <Route path="/App" component={App} />
            <Route path="/About" component={About} />
            <Route path="/Expand" component={Expand} />
            <Route path="/Contact" component={Contact} />
            <Route path="/AboutA" component={AboutA} />
            <Route path="/AboutH" component={AboutH} />
            <Route path="/ServiceA" component={ServiceA} />
           
            <Route path="/HospitalHome" component={HospitalHome} />
            <Route path="/Hospital" component={Hospital} />
            <Route path="/Admin" component={Admin} />
            <Route path="/Disease" component={Disease} />
            


        </div>
    </Router>, document.getElementById('root'));
