import { combineReducers } from 'redux'
import { ADD_USER, REMOVE_USER } from './actions'

function users(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          text: action.text,
        }
      ]

    case REMOVE_USER:
      return state.map((user, index) => {
          if(index !== action.index) return user
          else return null;
      })

    default:
      return state
  }
}

const usersApp = combineReducers({
  users
})

export default usersApp