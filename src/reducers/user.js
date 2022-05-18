import { USER_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_EMAIL:
    return { ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default user;
