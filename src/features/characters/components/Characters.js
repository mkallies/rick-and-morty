import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Card, Icon, Image } from 'semantic-ui-react'

const CharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 70px;
`

const propTypes = {
  characters: PropTypes.array.isRequired,
  handleCharacterLike: PropTypes.func.isRequired,
  handleCharacterModal: PropTypes.func.isRequired,
}

const Characters = ({
  characters,
  handleCharacterModal,
  handleCharacterLike,
}) => {
  return (
    <CharacterContainer>
      {characters.map(character => (
        <Card key={character.id}>
          <Image src={character.image} />
          <Card.Content>
            <Card.Header>{character.name}</Card.Header>
            <Card.Meta>Species: {character.species}</Card.Meta>
            <Card.Description>
              {`${character.name}'s`} current status is{' '}
              {character.status.toLowerCase()} and is from{' '}
              {character.origin.name}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              basic
              color="blue"
              onClick={() => handleCharacterModal(character)}
            >
              More Info
            </Button>

            <Button
              animated="vertical"
              basic
              color="red"
              onClick={() => handleCharacterLike(character)}
            >
              <Button.Content visible>
                <Icon name="heart" />
              </Button.Content>
              <Button.Content hidden>Like</Button.Content>
            </Button>
          </Card.Content>
        </Card>
      ))}
    </CharacterContainer>
  )
}

Characters.propTypes = propTypes

export default Characters
