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

export const setStyle = (component, attribute, value, PackageFace) => {
    console.log('component', component)
    console.log('attribute', attribute)
    console.log('value', value)
    console.log('PackageFace', PackageFace)
    return {
        type: SET_STYLE,
        component,
        attribute,
        value,
        PackageFace
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
    SavedPackageDesign: {
        PackageFaces: {}
    }
}
//         front: {
//             ImageStyle: {
//                 color: 'orange',
//                 url: '/package-choices/image-choice-spider.png',
//             },
//             TextStyle: {
//                 text: 'Sophie is queen',
//                 fontSize: 14,
//                 fontFamily: 'Arial'
//             }
//         },
//         right: {
//             ImageStyle: {
//                 color: 'yellow',
//                 url: '/package-choices/image-choice-trophy.png',
//             },
//             TextStyle: {
//                 text: 'Sophie wins',
//                 fontSize: 14,
//                 fontFamily: 'Arial'
//             }
//         }
//     }

export default function reducer(state = initialState, action) {
    Object.freeze(state);
    switch (action.type) {
        case SET_CURRENT_SIDE:
            return { ...state, currentSide: action.side }
        case SET_CURRENT_DROPDOWN:
            return { ...state, currentDropdown: action.component }
        case SET_STYLE:
            if(state.SavedPackageDesign.PackageFaces[action.PackageFace]) {
                var face = {...state.SavedPackageDesign.PackageFaces[action.PackageFace]}
            } else face = {};
            return {
                ...state,
                SavedPackageDesign: {
                    ...state.SavedPackageDesign,
                    PackageFaces: {
                        ...state.SavedPackageDesign.PackageFaces,
                        [action.PackageFace]: {
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
