import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: undefined,
    }
  }

  render() {
    return (
      <div className="App">
        <MainPage/>
        <RedditSearch setAppState={this.setState.bind(this)}/>

        { this.state.results ?
          <SearchResultsList results={this.state.results} />
          :
          undefined
        }

      </div>
    );
  }
}

export default App;
