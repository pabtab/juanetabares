import React from 'react'
import PropTypes from 'prop-types'

const Title = props => {
  return (
    <h1 className="title has-text-primary is-capitalized">{props.text}</h1>
  )
}

Title.propTypes = {
  text: PropTypes.string
}

export default Title
