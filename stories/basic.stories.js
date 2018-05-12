import {storiesOf} from '@storybook/react'
import React from 'react'
import ToggleTip from '../components/ToggleTip'

storiesOf('ToggleTip', module).add('Basic', () => {
  return (
    <div className="elements">
      <div className="btn-group">
        <div className="btn two">
          <span>Net Price</span>
          <ToggleTip content="Price of item before tax" />
        </div>
        <div className="btn two">
          <span>Gross Price</span>
          <ToggleTip content="Price of item including tax and service charges" />
        </div>
      </div>
    </div>
  )
})
