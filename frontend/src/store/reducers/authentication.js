import Cookies from "js-cookie";

export const SET_USER = "authentication/SET_USER";
export const REMOVE_USER = "authentication/REMOVE_USER";
export const SIGNUP = 'SIGNUP'

export const setUser = (user) => {
  return {
    type: SET_USER,
    user: user
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};

const newUser = user => {
  return {
    type: SIGNUP,
    user
  };
};

export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch(`/api/auth/login`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { user } = await response.json();
      dispatch(setUser(user));
      return response;
    }
  };
};

function loadUser() {
  const authToken = Cookies.get("token");
  if (authToken) {
    try {
      const payload = authToken.split(".")[1];
      const decodedPayload = atob(payload);
      const payloadObj = JSON.parse(decodedPayload);
      const { user } = payloadObj;
      return user;
    } catch (e) {
      Cookies.remove("token");
    }
  }
  return {};
}

export const logout = () => async dispatch => {
  const res = await fetch('/api/auth/logout', {
    method: "delete"
  });
  if (res.ok) {
    dispatch(removeUser());
  }
}

export const signup = (firstName, lastName, email, password, confirmPassword) => {
  return async (dispatch) => {
    const response = await fetch(`/api/auth/signup`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password, confirmPassword}),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(newUser(data))
      return response;
    }
  };
};

const authentication = (state=loadUser(), action) => {
  switch (action.type) {
    case SET_USER || SIGNUP:
      return action.user;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
}

export default authentication;
