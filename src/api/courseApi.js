import axios from 'axios';
import { handleResponse, handleError } from './apiUtils';

const baseUrl = `${process.env.API_URL}/courses`;

export function getCourses() {
  return axios
    .get(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getCourse(courseId) {
  return axios
    .get(`${baseUrl}/${courseId}`)
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  return axios
    .delete(`${baseUrl}/${courseId}/`)
    .then(handleResponse)
    .catch(handleError);
}
