import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const mapStateToProps = state => {
    return { 
        articles: state.articles
    }
}

const Wrapper = styled.div `
    clear: both;
    margin-top: 1.5rem;
`

const Item = styled.p`
    color: cadetblue;
    font-size: 2rem;
    margin: 1rem 0rem;
`

const ArticleList = ({ articles }) => 
    <Wrapper>
        {articles.map( (n, i) => (
            <Item key={ i } >
                { i+1 }. { n.title }
            </Item>
        ))}
    </Wrapper>

const List = connect(mapStateToProps)(ArticleList)

export default List