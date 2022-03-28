import * as actionTypes from '../actions/actionTypes';

const initialState = {
    safeId: null,
    crimes: [],
    loading: false
};

const reducer = (state = initialState, action: any) => {
    switch(action.type){
        case actionTypes.SETSAFEID:
            return {...state, safeId: action.value};
        case actionTypes.SETCRIMES:
            return {...state, crimes: action.value};
        case actionTypes.SETLOADING:
            return {...state, loading: action.value}
    }
    return state
}

export default reducer