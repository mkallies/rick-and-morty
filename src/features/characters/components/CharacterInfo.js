import React from 'react'
import PropTypes from 'prop-types'
import Location from './Location'
import Episodes from './Episodes'
import { Dimmer, Header, Loader, Segment } from 'semantic-ui-react'

const locationProps = {
  locations: PropTypes.array.isRequired,
}

const LocationDisplay = ({ locations }) => {
  const [origin, current] = locations

  return (
    <Segment.Group horizontal style={{ margin: '10px' }}>
      <Segment color="green">
        <Header>Origin {!current && '& Current location'}</Header>
        <Location
          dimension={origin.dimension}
          name={origin.name}
          residentCount={origin.residents.length}
          type={origin.type}
        />
      </Segment>

      {current && (
        <Segment color="blue">
          <Header>Current location</Header>
          <Location
            dimesion={current.dimension}
            name={current.name}
            residentCount={current.residents.length}
            type={current.type}
          />
        </Segment>
      )}
    </Segment.Group>
  )
}

LocationDisplay.propTypes = locationProps

const propTypes = {
  episodes: PropTypes.array.isRequired,
  isEpisodesLoading: PropTypes.bool.isRequired,
  isLocationLoading: PropTypes.bool.isRequired,
  locations: PropTypes.array.isRequired,
}

const CharacterInfo = ({
  episodes,
  isEpisodesLoading,
  isLocationLoading,
  locations,
}) => {
  return (
    <div style={{ height: '550px' }}>
      <div style={{ height: '145px', position: 'relative' }}>
        {isLocationLoading ? (
          <Dimmer active inverted>
            <Loader content="Loading locations" inverted />
          </Dimmer>
        ) : (
          <LocationDisplay locations={locations} />
        )}
      </div>

      <div style={{ position: 'relative', height: '380px' }}>
        {isEpisodesLoading ? (
          <Dimmer active inverted>
            <Loader content="Loading episodes" inverted />
          </Dimmer>
        ) : (
          <Episodes episodes={episodes} />
        )}
      </div>
    </div>
  )
}

CharacterInfo.propTypes = propTypes

export default CharacterInfo
