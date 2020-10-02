export const RECEIVE_PACKAGE_BASES = 'RECEIVE_PACKAGE_BASES';
export const RECEIVE_PACKAGE_BASE = 'RECEIVE_PACKAGE_BASE'
// export const RECEIVE_PACKAGE_DESIGNS = 'RECEIVE_PACKAGE_DESIGNS';
// export const RECEIVE_PACKAGE_DESIGN = 'RECEIVE_PACKAGE_DESIGN';

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


const initialState = {packageBases: [], packageBase: {}}

export default function reducer (state = initialState, action) {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PACKAGE_BASES:
            return {...state, packageBases: action.packageBases}
        case RECEIVE_PACKAGE_BASE:
            return {...state, packageBase: action.packageBase}
        default:
            return state
    }
}
