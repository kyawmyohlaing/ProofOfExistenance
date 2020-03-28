import React, { Component } from 'react'
import ImageIcon            from '@material-ui/icons/Image'
import EmptyState           from 'components/EmptyState'
import { styles }           from './styles.scss'

class AssetsView extends Component {
  render() {
    return (
      <div className={styles}>
        <EmptyState
          message="You have no assets yet."
          icon={<ImageIcon />}
        />
      </div>
    )
  }
}

export default AssetsView
