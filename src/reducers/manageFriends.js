export function manageFriends(state, action) {
  if (action.type === "ADD_FRIEND") {
    return Object.assign({}, state, {friends: state.friends.concat([action.payload])})
  } else if (action.type === "REMOVE_FRIEND") {
    let i = state.friends.findIndex(friend => friend.id === action.payload)
    let newFriends = state.friends.slice(0, i).concat(state.friends.slice(i + 1))
    return Object.assign({}, state, {friends: newFriends})
  } else {
    return state
  }
}
