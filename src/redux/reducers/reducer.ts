import * as actionTypes from '../actions/actionTypes';

const initialState = {
    safeId: null,
    crimes: [],
    loading: false,
    postLoading: false,
    errorMessage: '',
    location: '',
    changeLocation: false,
    postSuccess: false,
    errorScreen: false
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
            return {...state, errorMessage: action.value};
        case actionTypes.SETLOCATION:
            return {...state, location: action.value};
        case actionTypes.CHANGELOACTION:
            return {...state, changeLocation: action.value};
        case actionTypes.SETPOSTLOADING:
            return {...state, postLoading: action.value};
        case actionTypes.SETPOSTSUCCESS:
            return {...state, postSuccess: action.value};
        case actionTypes.SETERROR:
            return {...state, errorScreen: action.value}
    }
    return state
}

export default reducer