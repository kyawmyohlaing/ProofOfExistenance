import constants        from 'core/types'
import contract         from 'truffle-contract'
import ProofOfExistence from 'contracts/ProofOfExistence.json'

function dispatchSetContract(dispatch, proofOfExContract) {
  dispatch((() => {
    return {
      type: constants.SET_CONTRACT,
      proofOfExContract
    }
  })())
}

export function setContract(defaultAccount) {
  return (dispatch, getState) => {
    const { web3Provider } = getState().provider
    const ProofOfExContract = contract(ProofOfExistence)

    ProofOfExContract.setProvider(web3Provider.currentProvider)
    ProofOfExContract.defaults({ from: defaultAccount })

    dispatchSetContract(dispatch, ProofOfExContract)
  }
}
