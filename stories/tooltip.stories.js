import {storiesOf} from '@storybook/react'
import React from 'react'
import ToggleTip from '../components/ToggleTip'

storiesOf('ToggleTip', module).add('Tooltip', () => {
  return (
    <div className="elements">
      <div className="btn-group">
        <div className="btn two">
          <ToggleTip content="This action will submit the page for real!" >SUBMIT</ToggleTip>
        </div>
      </div>
    </div>
  )
})
