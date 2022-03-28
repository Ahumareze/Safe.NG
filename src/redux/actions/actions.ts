import * as actionTypes from './actionTypes';
import data from '../../assets/testData';

const fetchCrimes = (location: string) => {
    return(dispatch: any) => {
        // dispatch(setLoading(true));
        dispatch(setCrimes(data));
        // dispatch(setLoading(false));
    }
};

const setCrimes = (value: Array<any>) => {
    return{
        type: actionTypes.SETCRIMES,
        value
    }
}

const setLoading = (value: boolean) => {
    return{
        type: actionTypes.SETLOADING,
        value
    }
}

export {
    fetchCrimes
}