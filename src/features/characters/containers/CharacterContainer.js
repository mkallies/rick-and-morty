import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Characters from '../components/Characters'
import CharacterInfoContainer from './CharacterInfoContainer'
import { fetchCharacters } from '../actions'
import { getCharacters } from '../selectors'
import { Loader, Modal } from 'semantic-ui-react'
import { isLoading } from '../../../common/selectors'
import { FETCH_CHARACTERS } from '../constants'
import { toast } from 'react-toastify'

const mapState = state => ({
  isLoading: isLoading(state, FETCH_CHARACTERS),
  characters: getCharacters(state),
})

export class CharacterContainer extends Component {
  static propTypes = {
    fetchCharacters: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    characters: PropTypes.array,
  }

  static defaultProps = {
    characters: [],
  }

  state = {
    currentCharacter: null,
  }

  componentDidMount() {
    const { fetchCharacters } = this.props

    fetchCharacters()
  }

  handleCharacterModal = (character = null) => {
    this.setState({ currentCharacter: character })
  }

  handleCharacterLike = character => {
    toast.success(`Saved ${character.name} to your favourites!`)
  }

  render() {
    const { characters, isLoading } = this.props
    const { currentCharacter } = this.state

    if (isLoading) {
      return <Loader active content="Loading" />
    }

    if (characters.length) {
      return (
        <React.Fragment>
          <Characters
            characters={characters}
            handleCharacterLike={this.handleCharacterLike}
            handleCharacterModal={this.handleCharacterModal}
          />

          <Modal
            onClose={() => this.handleCharacterModal()}
            open={Boolean(currentCharacter)}
          >
            <Modal.Header>
              Character Information for{' '}
              {currentCharacter && currentCharacter.name}
            </Modal.Header>
            <CharacterInfoContainer character={currentCharacter} />
          </Modal>
        </React.Fragment>
      )
    }
  }
}

export default connect(mapState, { fetchCharacters })(CharacterContainer)
