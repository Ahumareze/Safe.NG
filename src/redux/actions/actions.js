import * as actionTypes from './actionTypes';
import data from '../../assets/testData';
import axios from 'axios';

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
        dispatch(setCrimes(data));
        dispatch(setLoading(false));
    }
};

const postCrime = (image: any, content: string) => {
    return (dispatch: any) => {
        if(!content){
            dispatch(setErrorMessage('please fill out the description of the crime'))
        }else if(content.length < 20){
            dispatch(setErrorMessage('description too short'))
        }else{
           
            const formdata = new FormData();
            formdata.append('image', {uri: image, name: 'image.jpg', type: 'image/jpg'});
            formdata.append('content', content)

            console.log(typeof(image))
            axios.post('http://localhost:5000/upload', formdata)
                .then(r => {
                    console.log(r.data)
                })
                .catch(e => {
                    console.log(e)
                })
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
    postCrime,
    changeLocation,
    updateLocation
}