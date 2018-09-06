import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'

const propTypes = {
  dimension: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  residentCount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
}

const Location = ({ name, dimension, type, residentCount }) => {
  return (
    <List>
      <List.Item>Name: {name}</List.Item>
      <List.Item>Dimension: {dimension}</List.Item>
      <List.Item>Type: {type}</List.Item>
      <List.Item>Residents: {residentCount} </List.Item>
    </List>
  )
}

Location.propTypes = propTypes

export default Location
