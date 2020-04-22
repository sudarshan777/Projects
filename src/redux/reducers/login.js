import * as Types from "../actions/types";

// Some of the properties are redundant.
const initialUserObj = {
  signUpUsersList: [],

  loggedIn: false,
  isValidToken: false,
  result: {},
  user: {
    email: "",
    displayName: "",
    registered: false,
  },
};

export default (state = initialUserObj, action) => {
  switch (action.type) {
    case Types.LOGIN_USER:
      return Object.assign({}, state, {
        loggedIn: false,
        isValidToken: false,
      });
    default:
      return state;
  }
};
