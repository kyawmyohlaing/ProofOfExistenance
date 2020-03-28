import constants from 'core/types'
import sha256    from 'sha256'

export function addAsset(asset) {
  return {
    type: constants.ADD_ASSET,
    asset
  }
}

export function clear() {
  return {
    type: constants.CLEAR_ASSETS
  }
}

async function checkIfAssetRegistered(ProofOfExContract, assetHash) {
  const assetExists = ProofOfExContract.deployed().then((poe) => {
    return poe.checkIfRegistered(assetHash)
  })
  return assetExists
}

async function registerAsset(ProofOfExContract, assetHash) {
  const result = ProofOfExContract.deployed().then((poe) => {
    return poe.registerAsset(assetHash)
  })
  const transaction = (result !== null) ? result : null
  return transaction
}

function dispatchAssetAlreadyExists(dispatch) {
  dispatch((() => {
    return {
      type: constants.CHECK_ASSET,
      alreadyExists: true
    }
  })())
}

function dispatchAssetDoesNotExist(assetHash, dispatch) {
  dispatch((() => {
    return {
      type: constants.CHECK_ASSET,
      alreadyExists: false,
      assetHash
    }
  })())
}

function dispatchAssetCreated(transaction, assetHash, dispatch) {
  dispatch((() => {
    return {
      type: constants.CREATE_ASSET_HASH,
      assetHash,
      transaction,
      success: true
    }
  })())
}

function dispatchCreationError(dispatch) {
  dispatch((() => {
    return {
      type: constants.CREATE_ASSET_HASH,
      success: false
    }
  })())
}

export function checkIfRegistered(assetUrl) {
  return async (dispatch, getState) => {
    const { proofOfExContract } = getState().contract
    const assetHash = sha256(assetUrl)
    const assetExists = await checkIfAssetRegistered(proofOfExContract, assetHash)

    if (assetExists) {
      dispatchAssetAlreadyExists(dispatch)
    } else {
      dispatchAssetDoesNotExist(assetHash, dispatch)
    }
  }
}

export function register() {
  return async (dispatch, getState) => {
    const { proofOfExContract } = getState().contract
    const { assetHash } = getState().asset
    const transaction = await registerAsset(proofOfExContract, assetHash)

    if (transaction) {
      dispatchAssetCreated(transaction, assetHash, dispatch)
    } else {
      dispatchCreationError(dispatch)
    }
  }
}
