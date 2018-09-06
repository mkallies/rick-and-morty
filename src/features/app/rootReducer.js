import { combineReducers } from 'redux'
import common from '../../common/reducer'
import characters from '../../features/characters/reducer'

export default combineReducers({ characters, common })
