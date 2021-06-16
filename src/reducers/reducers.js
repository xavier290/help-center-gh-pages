import { actionTypes } from "../actions/layout";

const initialState = {
  navbar: true,
};

function layout(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_NAVBAR:
      return { ...state, navbar: !state.navbar };

    default:
      return { ...state };
  }
}

export default layout;
