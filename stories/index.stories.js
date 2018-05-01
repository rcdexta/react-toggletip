import React from 'react'

import {storiesOf, addDecorator} from '@storybook/react'
import {linkTo} from '@storybook/addon-links'
import {Welcome} from '@storybook/react/demo'
import ToggleTip from '../components/ToggleTip'

addDecorator(story => <div style={{margin: 30}}>{story()}</div>)

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

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
