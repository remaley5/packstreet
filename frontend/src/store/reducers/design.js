export const SET_CURRENT_SIDE = 'SET_CURRENT_SIDE';
export const SET_CURRENT_DROPDOWN = 'SET_CURRENT_DROPDOWN';
export const SET_STYLE = 'SET_STYLE';

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
    return {
        type: SET_STYLE,
        component,
        attribute,
        value,
        PackageFace
    }
}


const initialState = {
    currentSide: 'front', currentDropdown: 'text', SavedPackageDesign: {
        name: "sophie's test",
        userId: 4,
        packageBaseId: 2,
        PackageFaces: {
            front: {
                ImageStyle: {
                    color: 'orange',
                    url: '/package-choices/image-choice-spider.png',
                },
                TextStyle: {
                    text: 'Sophie is queen',
                    fontSize: 14,
                    fontFamily: 'Arial'
                }
            }
        }
    }
}// [left, right, back, fron, top, bottom]

export default function reducer(state = initialState, action) {
    Object.freeze(state);
    switch (action.type) {
        case SET_CURRENT_SIDE:
            return { ...state, currentSide: action.side }
        case SET_CURRENT_DROPDOWN:
            return { ...state, currentDropdown: action.component }
        case SET_STYLE:
            return {
                ...initialState,
                // SavedPackageDesign: {
                //     ...state.SavedPackageDesign,
                //     PackageFaces: {
                //         ...state.SavedPackageDesign.PackageFaces,
                //         [action.PackageFace]: {
                //             ...state.SavedPackageDesign.PackageFaces[action.PackageFace],
                //             [action.component]: {
                //                 ...state.SavedPackageDesign.PackageFaces[action.PackageFace][action.component],
                //                 [action.attribute]: action.value
                //             }
                //         }
                //     }
                // }
            }
        default:
            return state
    }
}
