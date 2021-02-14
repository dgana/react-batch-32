import React from 'react'
import logo from './logo.svg'
import { connect } from 'react-redux'
import './App.css'
import { increment as tambah, decrement as kurang } from './actions'

function App({ currentNum, increment, decrement }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="flex">
          <button onClick={() => increment(1)} className="w2 h2 f5 mr2">
            +
          </button>
          <button onClick={() => decrement(1)} className="w2 h2 f5">
            -
          </button>
        </div>
        <p>Current Number : {currentNum}</p>
      </header>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    currentNum: state.counter
  }
}

const mapDispatchToProps = dispatch => ({
  increment: payload => dispatch(tambah(payload)),
  decrement: payload => dispatch(kurang(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
