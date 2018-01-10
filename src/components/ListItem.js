import React from 'react'
import styled from 'styled-components'

const Item = styled.p`
    color: cadetblue;
    font-size: 2rem;
    margin: 1rem 0rem;
    cursor: not-allowed;
`

const ListItem = ({ index, title, deleteArticle }) =>
    <Item onClick={ deleteArticle }>
        { index+1 }. { title }
    </Item>

export default ListItem