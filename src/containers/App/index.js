import React, { Component }         from 'react'
import PropTypes                    from 'prop-types'
import { connect }                  from 'react-redux'
import { bindActionCreators }       from 'redux'
import { MuiThemeProvider }         from '@material-ui/core/styles'
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import theme                        from 'configs/theme/config-theme'
import UploadView                   from 'containers/UploadView'
import AssetsView                   from 'containers/AssetsView'
import PendingTransactionsView      from 'containers/PendingTransactionsView'
import LatestUploadsView            from 'containers/LatestUploadsView'
import RegisterView                 from 'containers/RegisterView'
import * as providerActionCreators  from 'core/actions/actions-provider'
import NormalLayoutRoute            from './layouts/NormalLayoutRoute'
import RegistrationLayoutRoute      from './layouts/RegistrationLayoutRoute'
import MetaMaskNotification         from './components/MetaMaskNotification'

import './styles.scss' // global styles

class App extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.provider.setProvider()
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <HashRouter>
          <div>
           
            <div className="app-shell">
          <Switch>
            <NormalLayoutRoute path="/assets" component={AssetsView} />
            <NormalLayoutRoute path="/pending" component={PendingTransactionsView} />
            <NormalLayoutRoute path="/latest" component={LatestUploadsView} />
            <NormalLayoutRoute path="/upload" component={UploadView} />
            <RegistrationLayoutRoute path="/register" component={RegisterView} />
            <Redirect from="/" to="/assets" />
          </Switch>
          </div>
          </div>
        </HashRouter>   
        <MetaMaskNotification />
      </MuiThemeProvider>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      provider: bindActionCreators(providerActionCreators, dispatch)
    }
  }
}

App.propTypes = {
  actions: PropTypes.shape({}).isRequired
}

export default connect(null, mapDispatchToProps)(App)
