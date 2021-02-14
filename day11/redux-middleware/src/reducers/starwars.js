const initialState = {
  loading: true,
  people: [],
  errorMessage: ''
}

const starwars = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PEOPLE_REQUEST':
      return {
        ...state,
        loading: true,
        people: []
      }
    case 'FETCH_PEOPLE_SUCCESS':
      return {
        ...state,
        loading: false,
        people: action.payload
      }
    case 'DELETE_PERSON':
      return {
        ...state,
        loading: false,
        people: state.people.filter(x => x.id !== action.payload)
      }
    case 'FETCH_MORE_PEOPLE':
      return {
        ...state,
        loading: false,
        people: state.people.concat(action.payload)
      }
    case 'FETCH_PEOPLE_ERROR':
      return {
        loading: false,
        people: [],
        errorMessage: action.payload.message
      }
    default:
      return state
  }
}

export default starwars
