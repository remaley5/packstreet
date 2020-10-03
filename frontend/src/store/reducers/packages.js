export const RECEIVE_PACKAGE_BASES = 'RECEIVE_PACKAGE_BASES';
export const RECEIVE_PACKAGE_BASE = 'RECEIVE_PACKAGE_BASE'
export const SAVED_DESIGNS = 'SAVED_DESIGNS'

const receivePackageBases = (packageBases) => {
    return {
        type: RECEIVE_PACKAGE_BASES,
        packageBases
    };
};

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
    return async (dispatch) => {
        const res = await fetch(`/api/package/bases/${id}`)
        const data = await res.json();
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

const initialState = { packageBases: [], packageBase: {}, savedDesigns: [] }

export default function reducer(state = initialState, action) {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PACKAGE_BASES:
            return { ...state, packageBases: action.packageBases }
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
