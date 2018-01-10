import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteArticle } from '../actions'
import styled from 'styled-components'

const mapStateToProps = state => {
    return { 
        articles: state.articles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: article => dispatch(deleteArticle(article))
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
    cursor: not-allowed;
`
class ArticleList extends Component {

    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this)

    }

    handleDelete(id) {
        console.log(id)
        this.props.deleteArticle(id)
    }

    render() {
        return (
            <Wrapper>
                {this.props.articles.map( (n, i) => (
                    <Item key={ n.id } onClick={ () => this.handleDelete(n.id) }>
                        { i+1 }. { n.title }
                    </Item>
                ))}
            </Wrapper>
        )
    }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ArticleList)

export default List