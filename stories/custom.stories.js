import {storiesOf} from '@storybook/react'
import React from 'react'
import ToggleTip from '../components/ToggleTip'
import QuestionIcon from 'react-icons/lib/fa/question-circle'

storiesOf('ToggleTip', module).add('Custom Icon', () => {
  return (
    <div className="elements">
      <div className="btn-group">
        <div className="btn two">
          <span>Unit Economics</span>
          <ToggleTip
            content="Unit economics are the direct revenues and costs associated with a particular business model expressed on a per unit basis."
            icon={<QuestionIcon />}
          />
        </div>
      </div>
    </div>
  )
})


storiesOf('ToggleTip', module).add('Multiline', () => {
  return (
    <div className="elements">
      <div className="btn-group">
        <div className="btn two">
          <span>Taxable Income: $850</span>
          <ToggleTip
            content={['Federal Tax: $550', 'Social Security: $300']}
          />
        </div>
      </div>
    </div>
  )
})