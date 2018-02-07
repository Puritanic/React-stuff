import _ from 'lodash';
import * as types from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case types.CREATE_POST:
      return _.mapKeys(action.payload.data, 'id');
    case types.FETCH_POST: {
      const post = action.payload.data;
      return { ...state, [post.id]: post };
    }
    case types.DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
