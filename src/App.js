import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header/Header'
import Content from './Content/Content'
import './App.css'
import Load from './Content/Load'
import { delay } from 'q';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.enableMessage = this.enableMessage.bind(this);

  //   this.state = {
  //     displayMessage: false,
  //   };

  //   this.timer = setTimeout(this.enableMessage, 1000);
  // }

  // componentWillUnmount() {
  //   clearTimeout(this.timer);
  // }

  // enableMessage() {
  //   this.setState({displayMessage: true});
  // }


  // render() {
  //   const {isBusy} = this.props;
  //   console.log(isBusy)

  //   if (isBusy) {
  //     return <Load/>;
  //   }

  //   return <div>Ready!</div>;
  // }

  state = {  display: false  }

  handle = () => {
    this.setState({ display: true })
  }


  renderMap() {

    return (
      <div className="App">

        <Header />

        <Content />

      </div>

    );
  }

  renderWaitGetData() {
    

    if (this.state.display == true) {
      return this.renderMap();
    }
    else
      return (
        <div onClick={this.handle}>
          <Load />
        </div>
      );
  }

  render() {
    return <div>{this.renderWaitGetData()}</div>;
  }

}

export default App;


