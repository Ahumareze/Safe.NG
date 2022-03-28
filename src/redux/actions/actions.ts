import * as actionTypes from './actionTypes';
import data from '../../assets/testData';

const init = () => {
    return (dispatch: any) => {
        const safeId = localStorage.getItem('@safeId');
        if(safeId){
            dispatch(setSafeId(safeId))
        }else{
            let r = (Math.random() + 1).toString(36).substring(2);
            localStorage.setItem('@safeId', r);
            dispatch(setSafeId(r))
        }
    }
}

const setSafeId = (value: string) => {
    return{
        type: actionTypes.SETSAFEID,
        value
    }
}

const fetchCrimes = (location: string) => {
    return(dispatch: any) => {
        // dispatch(setLoading(true));
        dispatch(setCrimes(data));
        // dispatch(setLoading(false));
    }
};

const postCrime = (image: object | undefined, content: string) => {
    return (dispatch: any) => {
        if(!content){
            dispatch(setErrorMessage('please fill out the description of the crime'))
        }else if(content.length < 20){
            dispatch(setErrorMessage('description too short'))
        }else{
            console.log(image,content)
        }
    }
}

const setErrorMessage = (value: string) => {
    return{
        type: actionTypes.SETERRORMESSAGE,
        value
    }
}

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
    fetchCrimes,
    init,
    postCrime
}