// import lodash from 'lodash'

export default function reducer (state, { type, payload }) {
  switch(type) {
    case "CREATE_DATA_CONTINENTS":
      return {
        ...state,
        continents: payload
      }
    case "CREATE_DATA_COUNTRIES":
      return {
        ...state,
        countries: payload
      }
    case "CREATE_DATA_LANGUAGES":
      return {
        ...state,
        languages: payload
      }
    default: 
      return state;
  }
}