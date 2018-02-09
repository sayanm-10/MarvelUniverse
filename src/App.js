import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import SearchForm from './SearchForm'
import SuperHeroList from './SuperHeroList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      superHero: "",
      orderByName: false
    };
  }

  onSearch= (query, orderByName) => {
    this.setState({
      superHero: query,
      orderByName: orderByName
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <SearchForm onSearch={this.onSearch} />
            </div>
            <div className="col-6">
              <SuperHeroList superHero={this.state.superHero} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
