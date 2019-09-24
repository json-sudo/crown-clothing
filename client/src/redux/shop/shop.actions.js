import shopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

// async fetch function that returns a dispatch of other action objects
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        // starting the fetch action as soon as the function gets called
        // and the collection ref above has been created
        dispatch(fetchCollectionsStart());

        // and then dispatching the success action once the fetch completes successfully
        // or dispatching the failure action if the fetch is not completed
        // as redux-thunk allows dispatching of functions as opposed to objects
        collectionRef
            .get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}