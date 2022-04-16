import axios from 'axios';
import store from '../store/store';
import { get_ideas, delete_idea, add_idea, update_idea } from '../store/actions/idea-actions';

/**
 * Get all ideas
 */

export function getIdeas() {
  return axios.get('http://localhost:8080/api/ideas')
    .then(response => {
      store.dispatch(get_ideas(response.data));
      return response;
    });
}

/*
* Add a new idea
*/
export function addIdea(idea) {
  return axios.post('http://localhost:8080/api/addidea/', idea)
    .then(response => {
      store.dispatch(add_idea(idea));
      return response;
    });
}

/*
* Update an idea
*/
export function updateIdea(idea) {
  return axios.post('http://localhost:8080/api/updateidea/', idea)
    .then(response => {
      store.dispatch(update_idea(idea));
      return response;
    });
}

/**
 * Delete an idea
 */

export function deleteIdea(ideaId) {
  return axios.delete('http://localhost:8080/api/ideas/' + ideaId)
    .then(response => {
      store.dispatch(delete_idea(ideaId));
      return response;
    });
}

