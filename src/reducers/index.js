import { ADD_ARTICLE, DELETE_ARTICLE } from '../constants/ActionTypes'
import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './FetchReducers';

const initialState = {
    articles: []
}

const articles = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] }
        case DELETE_ARTICLE:
            return { ...state, articles: state.articles.filter( article => article.id !== action.id) }
        default:
            return state
    }
}

export default combineReducers({
    articles,
    items,
    itemsHasErrored,
    itemsIsLoading
});