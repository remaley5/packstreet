export const SET_CURRENT_SIDE = 'SET_CURRENT_SIDE';
export const SET_CURRENT_DROPDOWN = 'SET_CURRENT_DROPDOWN';
export const SET_STYLE = 'SET_STYLE';
export const SAVE_DESIGN = 'SAVE_DESIGN'

export const setCurrentSide = (side) => {
    return {
        type: SET_CURRENT_SIDE,
        side
    };
};

export const setCurrentDropdown = (component) => {
    return {
        type: SET_CURRENT_DROPDOWN,
        component
    }
}

export const setStyle = (component, attribute, value, packageFace) => {
    console.log('component', component)
    console.log('attribute', attribute)
    console.log('value', value)
    console.log('packageFace', packageFace)
    return {
        type: SET_STYLE,
        component,
        attribute,
        value,
        packageFace
    }
}

export const saveDesign = (data) => {
    return {
        type: SAVE_DESIGN,
        data
    }
}

export const saveCurrentDesign = (userId, designState) => {
    return async (dispatch) => {
        const response = await fetch('api/package/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, designState })
        });

        const data = await response.json();
        dispatch(saveDesign(data))
        console.log('You made a new Design!', data)
    }
}


const initialState = {
    currentSide: 'front', currentDropdown: 'text',
    savedPackageDesign: {
        packageFaces: {
            front: {
                textStyle: {
                    color: 'black',
                    fontSize: 14,
                },
                imageStyle: {
                }
            },
            back: {
                textStyle: {
                    color: 'black',
                    fontSize: 14,
                },
                imageStyle: {
                }
            },
            right: {
                textStyle: {
                    color: 'black',
                    fontSize: 14,
                },
                imageStyle: {
                }
            },
            left: {
                textStyle: {
                    color: 'black',
                    fontSize: 14,
                },
                imageStyle: {
                }
            },
            top: {
                textStyle: {
                    color: 'black',
                    fontSize: 14,
                },
                imageStyle: {
                }
            },
            bottom: {
                textStyle: {
                    color: 'black',
                    fontSize: 14,
                },
                imageStyle: {
                },
            }
        }
    }
}

export default function reducer(state = initialState, action) {
    Object.freeze(state);
    switch (action.type) {
        case SET_CURRENT_SIDE:
            return { ...state, currentSide: action.side }
        case SET_CURRENT_DROPDOWN:
            return { ...state, currentDropdown: action.component }
        case SET_STYLE:
            if (state.savedPackageDesign.packageFaces[action.packageFace]) {
                var face = { ...state.savedPackageDesign.packageFaces[action.packageFace] }
            } else face = {};
            return {
                ...state,
                savedPackageDesign: {
                    ...state.savedPackageDesign,
                    packageFaces: {
                        ...state.savedPackageDesign.packageFaces,
                        [action.packageFace]: {
                            ...face,
                            [action.component]: {
                                ...face[action.component],
                                [action.attribute]: action.value
                            }
                        }
                    }
                }
            }
        case SAVE_DESIGN:
            return { ...initialState };
        default:
            return state
    }
}
