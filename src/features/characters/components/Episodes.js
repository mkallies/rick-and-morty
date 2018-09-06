import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Accordion, Header } from 'semantic-ui-react'

export class Episodes extends Component {
  static propTypes = {
    episodes: PropTypes.array.isRequired,
  }

  render() {
    const { episodes } = this.props

    const panels = episodes.map(ep => ({
      key: ep.id,
      title: `${ep.name} - ${ep.episode}`,
      content: {
        content: (
          <div>
            <p>Airdate: {ep.air_date}</p>
            <p>Character count: {ep.characters.length}</p>
          </div>
        ),
      },
    }))

    return (
      <div style={{ padding: '15px' }}>
        <Header>Episode List</Header>
        <Accordion
          defaultActiveIndex={0}
          fluid
          panels={panels}
          style={{ height: '350px', overflowY: 'auto' }}
          styled
        />
      </div>
    )
  }
}

export default Episodes
