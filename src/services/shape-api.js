import axios from 'axios';
import store from '../store/store';
import { getShapesSuccess } from '../store/actions/shape-actions';

/**
 * Get shapes
 */

export function getShapes() {
  return axios.get('http://localhost:8080/api/shapes')
    .then(response => {
      store.dispatch(getShapesSuccess(response.data));
      return response;
    });
}
