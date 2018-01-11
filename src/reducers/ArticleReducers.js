import { ADD_ARTICLE, DELETE_ARTICLE } from '../constants/ActionTypes'

const articles = (state = [], action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return [...state, action.payload]
        case DELETE_ARTICLE:
            console.log(state)
            return state.filter( article => article.id !== action.id)
        default:
            return state
    }
}

export default articles