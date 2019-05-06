//หน้าหลัก

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header/Bar'
import Content from './Content/Content'
import './App.css'
import Load from './Content/Load'

class App extends Component {

  state = { display: false }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ display: true });
    }, 5000);
  }

  renderData() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }

  renderWaitGetData() {
    if (this.state.display == true) {
      return this.renderData();
    }
    else
      return (
        <Load />
      );
  }

  render() {
    return <div>{this.renderWaitGetData()}</div>;
  }

}

export default App;


