import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showList: true,
      name: '',
      status: '',
      updatedName: '',
      peoples: [
        {
          id: 1,
          name: 'Obi Wan',
          status: 'Jedi',
          isEdit: false
        },
        {
          id: 2,
          name: 'Luke Skywalker',
          status: 'Padawan',
          isEdit: false
        }
      ]
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  showList = () => {
    this.setState(state => ({ showList: !state.showList }))
  }

  addList = () => {
    const { name, status } = this.state
    this.setState(
      state => ({
        peoples: state.peoples.concat([
          { name, status, id: state.peoples[state.peoples.length - 1].id + 1 }
        ])
      }),
      () => {
        this.setState({
          name: '',
          status: ''
        })
      }
    )
  }

  delete = id => {
    this.setState(state => {
      if (state.peoples.length > 1) {
        return {
          peoples: state.peoples.filter(x => x.id !== id)
        }
      }
    })
  }

  update = (id, name) => {
    this.setState(state => ({
      peoples: state.peoples.map(x => {
        if (x.id === id) {
          return {
            ...x,
            name
          }
        } else return x
      })
    }))
  }

  onChangePeopleName = e => {
    this.setState({
      updatedName: e.target.value
    })
  }

  showInput = id => {
    this.setState(state => ({
      peoples: state.peoples.map(x => {
        if (id === x.id) {
          return {
            ...x,
            isEdit: !x.isEdit
          }
        } else return x
      })
    }))
  }

  render() {
    const { name, status, peoples, showList, updatedName } = this.state
    return (
      <>
        <label htmlFor="name">Name :</label>
        <br />
        <input
          id="name"
          type="text"
          value={name}
          name="name"
          onChange={this.onChange}
          placeholder="Input new character"
        />
        <br />
        <input
          type="text"
          value={status}
          name="status"
          onChange={this.onChange}
          placeholder="Input stats"
        />
        <Button onClick={() => this.addList()}>Add +</Button>
        <Button onClick={this.showList}>Show List</Button>
        {showList && (
          <List
            deletePeople={this.delete}
            onChangePeopleName={this.onChangePeopleName}
            showInput={this.showInput}
            updatedName={updatedName}
            data={peoples}
            marginBottom={14}
            update={this.update}
          />
        )}
        <p>Current name value: {name}</p>
      </>
    )
  }
}

const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
)

function List({
  data,
  marginBottom,
  deletePeople,
  showInput,
  onChangePeopleName,
  updatedName,
  update
}) {
  return (
    <ul>
      {data.map(({ name = '', status, id, isEdit }) => (
        <li key={id} style={{ marginBottom }}>
          <span onClick={() => showInput(id)}>Name: {name}</span> <br />
          {isEdit && (
            <>
              <input
                type="text"
                value={updatedName}
                onChange={onChangePeopleName}
                onKeyUp={e => {
                  if (e.keyCode === 13) {
                    update(id, updatedName)
                    showInput(id)
                  }
                }}
              />
              <br />
            </>
          )}
          Status: {status}
          <img
            style={{
              width: 24,
              cursor: 'pointer',
              marginLeft: 20
            }}
            src="https://cdn3.iconfinder.com/data/icons/web-57/100/fb-web-1-512.png"
            alt="delete-icon"
            onClick={() => deletePeople(id)}
          />
        </li>
      ))}
    </ul>
  )
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deletePeople: PropTypes.func.isRequired,
  showInput: PropTypes.func.isRequired
}

List.defaultProps = {
  marginBottom: 12
}

export default App
