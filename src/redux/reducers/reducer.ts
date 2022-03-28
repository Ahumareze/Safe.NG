import * as actionTypes from '../actions/actionTypes';

const initialState = {
    crimes: {}
};

const reducer = (state = initialState, action: any) => {
    switch(action.type){
        case actionTypes.SETCRIMES:
            return {...state, crimes: action.value}
    }
    return state
}

export default reducer