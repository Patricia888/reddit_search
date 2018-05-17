import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainHeader from './main-header/main-header'
import RedditData from './reddit-data/reddit-data'
import RedditSearch from './reddit_search/reddit_search'

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
        <MainHeader/>
        <RedditSearch setAppState={this.setState.bind(this)}/>

        { this.state.results ?
          <RedditData results={this.state.results} />
          :
          undefined
        }

      </div>
    )
  }
}

export default App
