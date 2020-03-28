import { combineReducers } from 'redux'
import { accountReducer }  from 'core/reducers/reducer-account'
import { assetReducer }    from 'core/reducers/reducer-asset'
import { providerReducer } from 'core/reducers/reducer-provider'
import { uiReducer }       from 'core/reducers/reducer-ui'
import { contractReducer } from 'core/reducers/reducer-contract'

const rootReducer = combineReducers({
  account: accountReducer,
  asset: assetReducer,
  contract: contractReducer,
  provider: providerReducer,
  ui: uiReducer
})

export default rootReducer
