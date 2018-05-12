import React from 'react'
import PropTypes from 'prop-types'
import InfoIcon from 'react-icons/lib/fa/info-circle'
import './styles'

class ToggleTip extends React.Component {
  get label () {
    const {content} = this.props
    if (content instanceof Array) {
      return content.join('\n')
    } else {
      return content
    }
  }

  get ttlpClasses () {
    const {animated, placement} = this.props
    const classes = ['tltp--rounded']
    if (!animated) classes.push('tltp--no-animate')
    classes.push(`tltp--${placement}`)
    return classes.join(' ')
  }

  get content () {
    return this.props.children || this.props.icon || <InfoIcon style={{cursor: 'pointer', verticalAlign: 'none'}} />
  }

  render () {
    return (
      <span className={this.ttlpClasses} style={{display: 'flex', marginLeft: 3}} aria-label={this.label}>
        {this.content}
      </span>
    )
  }
}

ToggleTip.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  placement: PropTypes.oneOf([
    'bottom-right',
    'bottom',
    'bottom-left',
    'right',
    'left',
    'top-right',
    'top',
    'top-left'
  ]),
  animated: PropTypes.bool,
  icon: PropTypes.node,
  children: PropTypes.node
}

ToggleTip.defaultProps = {
  placement: 'bottom',
  animated: true
}

export default ToggleTip
