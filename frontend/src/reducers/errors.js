import { GET_ERRORS, RECEIVE_CURRENT_USER } from '../util/session_api_util';

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case GET_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default errorsReducer;
