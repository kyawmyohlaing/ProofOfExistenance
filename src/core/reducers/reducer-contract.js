import constants from 'core/types'

const initialState = {
  proofOfExContract: null
}

export function contractReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SET_CONTRACT:
      return Object.assign({}, state, {
        proofOfExContract: action.proofOfExContract
      })

    default:
      return state
  }
}
