import * as actionTypes from './actionTypes';
import axios from 'axios';
import dbURL from '../../utilities/url';

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
        dispatch(getLocation());
    }
};

const getLocation = () => {
    return(dispatch: any) => {
        const location = localStorage.getItem('@safeLocation');
        if(location){
            dispatch(setLocation(location))
        }else{
            localStorage.setItem('@safeLocation', 'Lagos');
            dispatch(setLocation('Lagos'))
        }
    }
};

const updateLocation = (location: string) => {
    return(dispatch: any) => {
        dispatch(changeLocation(false));

        //update localstorage location
        localStorage.setItem('@safeLocation', location);
        dispatch(setLocation(location));

        dispatch(fetchCrimes(location))
    }
}

const setLocation = (value: string) => {
    return{
        type: actionTypes.SETLOCATION,
        value
    }
};

const setSafeId = (value: string) => {
    return{
        type: actionTypes.SETSAFEID,
        value
    }
};

const changeLocation = (value: boolean) => {
    return{
        type: actionTypes.CHANGELOACTION,
        value
    }
};

const fetchCrimes = (location: string) => {
    return(dispatch: any) => {
        dispatch(setLoading(true));
        dispatch(setError(false))
        
        axios.post(dbURL + '/api/crimes', {location})
            .then(r => {
                dispatch(setLoading(false));
                dispatch(setCrimes(r.data))
            })
            .catch(e => {
                dispatch(setLoading(false));
                dispatch(setError(true))
                console.log(e)
            })
    }
};

const postCrime = (image: any, content: string) => {
    return (dispatch: any) => {
        //Runs check to see if all inputs are in place
        if(!content){
            dispatch(setErrorMessage('please fill out the description of the crime'))
        }else if(content.length < 20){
            dispatch(setErrorMessage('description too short'))
        }else if(!image){
            dispatch(setErrorMessage('please add an image for extra description'))
        }else{
            //post data to server
            const data = {
                image,
                content,
                date: new Date().toDateString(),
                time: new Date().toLocaleTimeString(),
                location: localStorage.getItem('@safeLocation'),
                likes: []
            };
            dispatch(setErrorMessage(''))
            dispatch(setPostLoading(true));
            axios.post(dbURL + '/api/upload', data)
                .then(r => {
                    dispatch(setPostSuccess(true));
                    dispatch(setPostLoading(false))
                })
                .catch(e => {
                    console.log(e);
                    dispatch(setPostLoading(false));
                    dispatch(setErrorMessage('Network error'))
                })
        }
    }
};

const likePost = (id: string, safeId: string) => {
    return() => {
        const data = {
            id,
            safeId
        }
        axios.post(dbURL + '/api/like', data)
            .then(r => {
                console.log(r.data)
            })
            .catch(e => {
                console.log(e)
            })
    }
}

const setPostLoading = (value: boolean) => {
    return{
        type: actionTypes.SETPOSTLOADING,
        value
    }
};

const setError = (value: boolean) => {
    return{
        type: actionTypes.SETERROR,
        value
    }
}

const setPostSuccess = (value: boolean) => {
    return{
        type: actionTypes.SETPOSTSUCCESS,
        value
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
    postCrime,
    changeLocation,
    updateLocation,
    likePost
}