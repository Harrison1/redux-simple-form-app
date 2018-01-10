export const ADD_ARTICLE = 'ADD_ARTICLE'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'

export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
})

export const deleteArticle = id => ({
    type: DELETE_ARTICLE,
    id: id
})