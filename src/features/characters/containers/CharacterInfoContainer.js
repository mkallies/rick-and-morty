import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CharacterInfo from '../components/CharacterInfo'
import { fetchEpisodes, fetchLocation } from '../actions'
import last from 'lodash/last'
import { isLoading } from '../../../common/selectors'
import { FETCH_EPISODES, FETCH_LOCATION } from '../constants'
import { getEpisodes, getLocations } from '../selectors'

const mapState = state => ({
  isEpisodesLoading: isLoading(state, FETCH_EPISODES),
  isLocationLoading: isLoading(state, FETCH_LOCATION),
  episodes: getEpisodes(state),
  locations: getLocations(state),
})

export class CharacterInfoContainer extends Component {
  static propTypes = {
    episodes: PropTypes.array.isRequired,
    fetchEpisodes: PropTypes.func.isRequired,
    fetchLocation: PropTypes.func.isRequired,
    isEpisodesLoading: PropTypes.bool.isRequired,
    isLocationLoading: PropTypes.bool.isRequired,
    locations: PropTypes.array.isRequired,
    character: PropTypes.object,
  }

  static defaultProps = {
    character: null,
  }

  componentDidMount() {
    const { character, fetchEpisodes, fetchLocation } = this.props

    const episodeIds = character.episode.map(ep => last(ep.split('/')))
    fetchEpisodes(episodeIds)

    const origin = last(character.origin.url.split('/'))
    const current = last(character.location.url.split('/'))

    fetchLocation(origin, current)
  }

  render() {
    const {
      isEpisodesLoading,
      isLocationLoading,
      episodes,
      locations,
    } = this.props

    return (
      <CharacterInfo
        episodes={episodes}
        isEpisodesLoading={isEpisodesLoading}
        isLocationLoading={isLocationLoading}
        locations={locations}
      />
    )
  }
}

export default connect(mapState, { fetchEpisodes, fetchLocation })(
  CharacterInfoContainer
)
