import { ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS} from '../constants/FetchTypes'

export const itemsHasErrored = bool => ({
    type: ITEMS_HAS_ERRORED,
    hasErrored: bool
})

export const itemsIsLoading = bool => ({
    type: ITEMS_IS_LOADING,
    isLoading: bool
})

export const itemsFetchDataSuccess = items => ({
    type: ITEMS_FETCH_DATA_SUCCESS,
    items
})

export const errorAfterFiveSeconds = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(itemsHasErrored(true))
        }, 5000)
    }
}

export const itemsFetchData = url => {
    return dispatch => {

        dispatch(itemsIsLoading(true))

        fetch(url).then( response => {
            if(!response.ok) {
                throw Error(response.statusText)
            }

            dispatch(itemsIsLoading(false))

            return response
        })
        .then(response => response.json() )
        .then(items => dispatch(itemsFetchDataSuccess(items)))
        .catch( error => {console.log(error.message); dispatch(itemsHasErrored(true))})
    }
}