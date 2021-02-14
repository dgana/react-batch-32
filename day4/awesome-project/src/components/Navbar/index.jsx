import React, { Component } from 'react'
import stylesheet from './Navbar.module.css'

class Navbar extends Component {
  render() {
    const { children } = this.props
    return <div className={stylesheet.container}>{children}</div>
  }
}

export default Navbar
