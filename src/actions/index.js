import { ADD_ARTICLE, DELETE_ARTICLE } from '../constants/ActionTypes'

export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
})

export const deleteArticle = id => ({
    type: DELETE_ARTICLE,
    id: id
})