import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'

class MyRedirect extends Component {
  state = {
    isRedirect: false
  }

  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <button onClick={() => this.setState({ isRedirect: true })}>
            Redirect to homepage
          </button>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/not-found">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

const Home = () => <p>Home</p>
const About = () => <p>About</p>
const NotFound = () => <Redirect to="/" />

export default MyRedirect
