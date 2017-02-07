export function managePresents(state, action){
  if (action.type === "INCREASE") {
    return {numberOfPresents: state.numberOfPresents + 1}
    // let new_state = {...state, }
  } else if (action.type === "DECREASE") {
    return state.numberOfPresent - 1
  } else {
    return state
  }

}
