import { LOAD_COURSES_SUCCESS, LOAD_COURSES_ERROR } from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case LOAD_COURSES_SUCCESS:
      return action.courses;
    case LOAD_COURSES_ERROR:
      return state;
    default:
      return state;
  }
}
