import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import SearchForm from './SearchForm'

class App extends Component {
  constructor(props) {
    super(props);

    this.setState = {
      superHero: ""
    };
  }

  onSearch= query => {
    alert("App is searching for ${query}")
  }

  render() {
    const welcome_msg = "Hello World";
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{ welcome_msg }</h1>
        </header>
        <SearchForm />
      </div>
    );
  }
}

export default App;
