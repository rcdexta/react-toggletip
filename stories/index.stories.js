import React from 'react'
import {addDecorator} from '@storybook/react'

addDecorator(story => <div style={{margin: 30}}>{story()}</div>)

import './basic.stories'
import './placement.stories'
import './custom.stories'
import './tooltip.stories'


