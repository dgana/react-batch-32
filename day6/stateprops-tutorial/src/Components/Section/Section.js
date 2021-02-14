import React, { Component } from 'react'
import './Section.css'
import Card from '../Card/Card.js'

export default class Section extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { theme, title, showList, content, useStyle } = this.props
    return (
      <div className="Section">
        <head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          ></link>
        </head>
        <p>{title}</p>
        {showList && (
          <Card useStyle={useStyle} theme={theme} content={content} />
        )}
      </div>
    )
  }
}
