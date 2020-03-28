import constants from 'core/types'

const initialState = {
  leftNavOpen: false,
  rightNavOpen: false,
  modalState: {
    openModal: false,
    modalKey: ''
  }
}

export function uiReducer(state = initialState, action) {
  switch (action.type) {
    case constants.OPEN_MODAL:
      return Object.assign({}, state, {
        modalState: {
          openModal: true,
          modalKey: action.modalKey
        }
      })

    case constants.CLOSE_MODAL:
      return Object.assign({}, state, {
        modalState: {
          openModal: true,
          modalKey: ''
        }
      })

    case constants.OPEN_LEFT_NAV:
      return Object.assign({}, state, {
        leftNavOpen: true
      })

    case constants.CLOSE_LEFT_NAV:
      return Object.assign({}, state, {
        leftNavOpen: false
      })

    case constants.OPEN_RIGHT_NAV:
      return Object.assign({}, state, {
        rightNavOpen: true
      })

    case constants.CLOSE_RIGHT_NAV:
      return Object.assign({}, state, {
        rightNavOpen: false
      })

    case constants.CLEAR_UI:
      return Object.assign({}, state, {
        initialState
      })

    default:
      return state
  }
}
