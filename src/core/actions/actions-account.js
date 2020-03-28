import constants from 'core/types'

export function setEmail(email) {
  return {
    type: constants.SET_ACCOUNT_EMAIL,
    email
  }
}

export function clear() {
  return {
    type: constants.CLEAR_ACCOUNT
  }
}

export function setDefaultAccount(defaultAccount) {
  return (dispatch, getState) => {
    const { web3Provider } = getState().provider
    web3Provider.eth.defaultAccount = defaultAccount

    dispatch((() => {
      return {
        type: constants.SET_ACCOUNT,
        id: defaultAccount
      }
    })())
  }
}
