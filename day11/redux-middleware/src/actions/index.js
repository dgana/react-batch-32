import axios from 'axios'
let id = 0

const fetchPeopleAsync = () => ({
  type: 'FETCH_PEOPLE_REQUEST'
})

const fetchPeopleSuccess = payload => ({
  type: 'FETCH_PEOPLE_SUCCESS',
  payload
})

const fetchPeopleError = payload => ({
  type: 'FETCH_PEOPLE_ERROR',
  payload
})

const fetchMorePeopleAsync = payload => ({
  type: 'FETCH_MORE_PEOPLE',
  payload
})

export const deletePerson = payload => ({
  type: 'DELETE_PERSON',
  payload
})

export const fetchPeople = () => dispatch => {
  dispatch(fetchPeopleAsync())
  try {
    axios.get(`https://swapi.co/api/people`).then(response => {
      const addId = response.data.results.map(x => ({ id: id++, ...x }))
      dispatch(fetchPeopleSuccess(addId))
    })
    // const addId = data.results.map(x => ({ id: id++, ...x }))
  } catch (e) {
    dispatch(fetchPeopleError(e))
  }
}

export const fetchMorePeople = (page = 2) => async dispatch => {
  try {
    const { data } = await axios.get(`https://swapi.co/api/people?page=${page}`)
    const addId = data.results.map(x => ({ id: id++, ...x }))
    dispatch(fetchMorePeopleAsync(addId))
  } catch (e) {
    console.error(e)
  }
}
