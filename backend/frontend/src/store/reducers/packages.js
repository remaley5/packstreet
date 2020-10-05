export const RECEIVE_PACKAGE_BASES = 'RECEIVE_PACKAGE_BASES';
export const RECEIVE_PACKAGE_BASE = 'RECEIVE_PACKAGE_BASE'
export const SAVED_DESIGNS = 'SAVED_DESIGNS';
export const SET_CURRENT_BASE = 'SET_CURRENT_BASE'

const receivePackageBases = (packageBases) => {
    return {
        type: RECEIVE_PACKAGE_BASES,
        packageBases
    };
};

export const setCurrentBase = (currentBaseId) => {
    return {
        type: SET_CURRENT_BASE,
        currentBaseId
    }
}

const receivePackageBase = (packageBase) => {
    return {
        type: RECEIVE_PACKAGE_BASE,
        packageBase
    };
};

export const savedDesigns = designs => {
    return {
        type: SAVED_DESIGNS,
        designs
    }
}

export const getPackageBases = () => {
    return async (dispatch) => {
        const res = await fetch('/api/package/bases');
        const data = await res.json();
        dispatch(receivePackageBases(data));
        return data;
    };
};

export const getPackageBase = (id) => {
    // debugger
    return async (dispatch) => {
        const res = await fetch(`/api/package/bases/${id}`)
        const data = await res.json();
        console.log('data', data)
        // debugger
        dispatch(receivePackageBase(data));
        return data;
    };
};

export const getSavedDesigns = (id) => {
    return async (dispatch) => {
        const response = await fetch(`api/package/my-designs/${id}`);

        const {designs}= await response.json()
        dispatch(savedDesigns(designs));
        console.log('You got saved designs!', designs)
    }
}

const initialState = { packageBases: [], packageBase: {}, savedDesigns: [], currentBaseId: 1 }

export default function reducer(state = initialState, action) {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PACKAGE_BASES:
            return { ...state, packageBases: action.packageBases }
        case SET_CURRENT_BASE:
            return {...state, currentBaseId: action.currentBaseId}
        case RECEIVE_PACKAGE_BASE:
            return { ...state, packageBase: action.packageBase }
        case SAVED_DESIGNS:
            return {
                ...state,
                savedDesigns: action.designs
            }
        default:
            return state
    }
}
