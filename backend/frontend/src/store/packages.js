import { removeUser } from './authentication';

const LOAD = "LOAD";
const SET_CURRENT = "SET_CURRENT";
// const LOAD_TYPES = "LOAD_TYPES";
const FORM_ERRORS = "FORM_ERRORS";

const load = (packages) => {
  return {
    type: LOAD,
    packages
  };
};

const setCurrent = (packages) => {
  return {
    type: SET_CURRENT,
    packages
  };
};

// const setTypes = (types) => {
//   return {
//     type: LOAD_TYPES,
//     types
//   };
// };
const formErrors = (errors) => {
  return {
    type: FORM_ERRORS,
    errors
  };
};

export const getOnePackage = (id) => async (dispatch) => {
  const res = await fetch(`/api/packages/${id}`);
  if (res.ok) {
    const data = await res.json();
    dispatch(setCurrent(data));
    return data;
  } else if (res.status === 401) {
    return dispatch(removeUser());
  }
  throw res;
};

export const getPackages = () => async dispatch => {
  // const res = await fetch('/api/packages');
  // if (res.ok) {
  //   const data = await res.json();
  //   dispatch(load(data));
  //   return data;
  // } else if (res.status === 401) {
  //   return dispatch(removeUser());
  // }
  // throw res;
};

// export const getPackageTypes = () => async dispatch => {
//   const res = await fetch('/api/packages/types');
//   if (res.ok) {
//     const data = await res.json();
//     dispatch(setTypes(data));
//     return data;
//   } else if (res.status === 401) {
//     return dispatch(removeUser());
//   }
//   throw res;
// };

export const createPackage = (packages) => async dispatch => {
  const res = await fetch('/api/packages/', {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(packages)
  });
  if (res.ok) {
    dispatch(getPackages());
    return res;
  } else if (res.status === 401) {
    dispatch(removeUser());
    return res;
  } else if (res.status === 422) {
    const { errors } = await res.json();
    dispatch(formErrors(errors));
    return res;
  }
  throw res;
};

const initialState = {
  types: [],
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case LOAD:
      return { ...state, list: action.packages };
    case SET_CURRENT:
      return { ...state, current: action.packages };
    // case LOAD_TYPES:
    //   return { ...state, types: action.types };
    case FORM_ERRORS:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
}
