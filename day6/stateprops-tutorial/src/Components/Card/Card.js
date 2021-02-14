import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
  render() {
    const style = {
      1: {
        fontSize: 20,
        background: 'salmon'
      },
      2: {
        fontSize: 40,
        background: 'orange'
      },
      3: {
        fontSize: 5,
        background: 'red'
      }
    }
    const { theme } = this.props

    console.log(this.props, 'halooo tesss')

    if (this.props.useStyle) {
      return <p>halo</p>
    }

    return (
      <div className={`card`} style={style[theme]}>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
