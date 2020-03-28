import React, { Component }         from 'react'
import PropTypes                    from 'prop-types'
import { connect }                  from 'react-redux'
import { bindActionCreators }       from 'redux'
import * as accountActionCreators   from 'core/actions/actions-account'
import * as assetActionCreators     from 'core/actions/actions-asset'
import withWidth, { isWidthUp }     from '@material-ui/core/withWidth'
import DesktopView                  from './layouts/DesktopView'
import MobileView                   from './layouts/MobileView'
import { styles }                   from './styles.scss'

class RegisterView extends Component {
  componentWillUnmount() {
    const { actions } = this.props
    actions.account.clear()
    actions.asset.clear()
  }

  getPanel = () => {
    const { location } = this.props
    return parseInt(location.search.substr(1).split('=')[1], 10)
  }

  renderView=() => {
    const { asset, width } = this.props
    const panel = this.getPanel()

    if (isWidthUp('md', width)) {
      return (<DesktopView asset={asset} panel={panel} />)
    }
    return (<MobileView asset={asset} panel={panel} />)
  }

  render() {
    return (
      <div className={styles}>
        {this.renderView()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    asset: state.asset
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      account: bindActionCreators(accountActionCreators, dispatch),
      asset: bindActionCreators(assetActionCreators, dispatch)
    }
  }
}

RegisterView.propTypes = {
  asset: PropTypes.shape({}).isRequired,
  actions: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
}

export default withWidth()(connect(mapStateToProps, mapDispatchToProps)(RegisterView))
