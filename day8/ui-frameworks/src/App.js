import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'antd/dist/antd.css'
import { Menu, Dropdown, Icon } from 'antd'

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://google.com">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Hover me <Icon type="down" />
          </a>
        </Dropdown>
        <a
          className="App-link font-saya"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
