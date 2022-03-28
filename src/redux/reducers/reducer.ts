import * as actionTypes from '../actions/actionTypes';

const initialState = {
    safeId: null,
    crimes: [],
    loading: false,
    errorMessage: null
};

const reducer = (state = initialState, action: any) => {
    switch(action.type){
        case actionTypes.SETSAFEID:
            return {...state, safeId: action.value};
        case actionTypes.SETCRIMES:
            return {...state, crimes: action.value};
        case actionTypes.SETLOADING:
            return {...state, loading: action.value};
        case actionTypes.SETERRORMESSAGE:
            return {...state, errorMessage: action.value}
    }
    return state
}

export default reducer