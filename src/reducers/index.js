import { combineReducers } from 'redux';
import articles from './ArticleReducers'
import { items, itemsHasErrored, itemsIsLoading } from './FetchReducers';

export default combineReducers({
    articles,
    items,
    itemsHasErrored,
    itemsIsLoading
});