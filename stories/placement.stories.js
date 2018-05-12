import {storiesOf} from '@storybook/react'
import React from 'react'
import ToggleTip from '../components/ToggleTip'

storiesOf('ToggleTip', module).add('Placement', () => {
  return (
    <div className="elements">
      <div className="btn-group">
        <div className="btn">
          <ToggleTip content="Show tooltip to Left" placement="left" />
          <span>Left</span>
        </div>
        <div className="btn two">
          <span>Top</span>
          <ToggleTip content="Show tooltip to top" placement="top" />
        </div>
        <div className="btn three">
          <span>Bottom</span>
          <ToggleTip content="Show tooltip to bottom" placement="bottom" />
        </div>
        <div className="btn four">
          <span>Right</span>
          <ToggleTip content="Show tooltip to right" placement="right" />
        </div>
      </div>
    </div>
  )
})

