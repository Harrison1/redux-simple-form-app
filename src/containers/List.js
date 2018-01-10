import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteArticle } from '../actions'
import ListItem from '../components/ListItem'
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

class ArticleList extends Component {

    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this)

    }

    handleDelete(id) {
        this.props.deleteArticle(id)
    }

    render() {
        return (
            <Wrapper>
                {this.props.articles.map( (n, i) => (
                    <ListItem key={ n.id } deleteArticle={ () => this.handleDelete(n.id) } index={ i } title={ n.title } />
                ))}
            </Wrapper>
        )
    }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ArticleList)

export default List