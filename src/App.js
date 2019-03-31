import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header/Header'
import Content from './Content/Content';
import Footer from './Footer/Footer';
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content/>
        <Footer/>
      </div>

    );
  }
}

export default App;
