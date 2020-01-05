import { getCourses } from '../../api/courseApi';
import { LOAD_COURSES_SUCCESS, LOAD_COURSES_ERROR } from './actionTypes';

export function loadCoursesSuccess(courses) {
  return { type: LOAD_COURSES_SUCCESS, courses };
}

export function loadCoursesError(error) {
  return { type: LOAD_COURSES_ERROR, error };
}

export function loadCourses() {
  return function loadCoursesDispatch(dispatch) {
    return getCourses()
      .then((courses) => dispatch(loadCoursesSuccess(courses)))
      .catch((error) => dispatch(loadCoursesError(error)));
  };
}
