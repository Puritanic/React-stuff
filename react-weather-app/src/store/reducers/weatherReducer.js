import * as types from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_WEATHER:
      console.log(action.payload);
      return state.concat([action.payload.data]);
    default:
      return state;
  }
};
