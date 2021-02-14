import React from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
    <>
      <Navbar>
        <p>yuhuuu</p>
      </Navbar>
      <Card>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui augue,
          hendrerit vel mauris vel, facilisis egestas libero. Nulla eu cursus
          lectus, ac semper elit. Integer quis ligula nec nibh consectetur
          pretium vel ac tortor. Nunc placerat viverra orci, ut ornare mi
          viverra ut. Sed a tortor fermentum, varius sem ac, tempus purus. Proin
          elementum libero ut nisi fringilla, eget rutrum diam fermentum.
          Vivamus mattis pretium libero, ac dignissim augue mollis gravida.
          Vestibulum egestas dui in mauris placerat, non lacinia libero
          accumsan. Ut tincidunt ornare dolor, vel dapibus sapien faucibus
          vitae. Morbi vel pulvinar enim. Aliquam rhoncus lacinia pretium.
          Vivamus pretium, nulla ac malesuada faucibus, augue mi hendrerit elit,
          sit amet iaculis nunc orci id nisi. Nunc vestibulum arcu non erat
          tempor venenatis. Integer ultrices, nisl id aliquet aliquet, ante
          lectus molestie erat, nec bibendum tortor felis sed justo. Sed iaculis
          eros vitae tortor accumsan mattis. Integer sed elementum felis.
          Curabitur commodo urna a consequat vehicula. Nullam quis lobortis
          nibh. Sed varius elit id bibendum finibus. Suspendisse accumsan, lacus
          vel varius convallis, purus mauris vestibulum massa, sit amet
          vulputate felis velit quis nulla. Phasellus nec augue quam. Curabitur
          lobortis est eget odio convallis, in placerat turpis luctus. Donec ac
          quam lacinia urna dignissim lacinia vitae sit amet est. Quisque
          malesuada, arcu ac tristique posuere, nunc diam venenatis lorem, sed
          consequat metus est quis enim. Curabitur placerat tortor enim, eu
          sagittis turpis lobortis sit amet. Phasellus quis urna quis nisi
          varius tristique ut ut tortor.
        </p>
      </Card>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  )
}

export default App
