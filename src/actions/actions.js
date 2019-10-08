export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'

export function addUser(text) {
  return { type: ADD_USER, text }
}

export function removeUser(index) {
  return { type: REMOVE_USER, index }
}