import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      people: [],
      url: 'https://swapi.co/api/people'
    }
  }

  callApi = url => {
    this.setState({ isLoading: true })
    axios
      .get(url)
      .then(res =>
        this.setState({
          people: res.data.results,
          isLoading: false,
          next: res.data.next,
          prev: res.data.previous
        })
      )
      .catch(e => console.log(e))
  }

  componentDidMount() {
    this.callApi(this.state.url)
  }

  render() {
    const { people, isLoading, prev, next } = this.state

    return (
      <div>
        {isLoading ? <p>Loading...</p> : <List data={people} />}
        <Button disabled={!prev} onClick={() => this.callApi(prev)}>
          Prev
        </Button>
        <Button disabled={!next} onClick={() => this.callApi(next)}>
          Next
        </Button>
      </div>
    )
  }
}

const Button = ({ onClick, children, ...restProps }) => {
  return (
    <button onClick={onClick} {...restProps}>
      {children}
    </button>
  )
}

const List = ({ data }) => (
  <ul>
    {data.map(x => (
      <li key={x.created}>{x.name}</li>
    ))}
  </ul>
)

export default App
