import { ADD_ARTICLE, DELETE_ARTICLE } from '../actions'

const initialState = {
    articles: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] }
        case DELETE_ARTICLE:
            return { ...state, articles: state.articles.filter( article => article.id !== action.id) }
        default:
            return state
    }
}

export default rootReducer