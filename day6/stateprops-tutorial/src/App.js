import React from 'react'
import './App.css'
import Navbar from '../src/Components/Navbar/Navbar'
import Section from './Components/Section/Section.js'
import ArrayMap from './Components/ArrayMap'

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          title: 'title1',
          showList: true,
          content: 'haskfjhakshbfkjahsfkjbasjfagsfbasjkfjk',
          theme: 1,
          className: 'section1'
        },
        {
          title: 'title2',
          showList: true,
          content: 'ajsfhkjabsjfkbajksfbjkasb',
          theme: 2,
          className: 'section1'
        },
        {
          title: 'title3',
          showList: true,
          content: 'kafklahisfkjnjkasnbfkjansfjk',
          theme: 3,
          className: 'section1'
        },
        {
          title: 'title4',
          showList: true,
          content: 'kafklahisfkjnjkasnbfkjansfjk',
          theme: 3,
          className: 'section1'
        },
        {
          title: 'Star Wars',
          showList: true,
          content: 'lorem ipsum',
          theme: 1,
          className: 'section1',
          useStyle: true
        }
      ]
    }
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <Navbar />
        <ArrayMap data={data}>{x => <Section {...x} />}</ArrayMap>
      </div>
    )
  }
}

export default Homepage
