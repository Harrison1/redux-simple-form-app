import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../actions'
import styled from 'styled-components'

const Label = styled.label`
    display: block;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`

const Input = styled.input`
    border-radius: 1rem;
    background: transparent;
    border: 1px solid grey;
    float: left;
    font-size: 1.5rem;
    padding: 0.5rem;

    &:focus {
        outline: none;
    }
`

const SubmitButton = styled.button`
    background: #3e98f5;
    border-radius: 1rem;
    border: 1px solid #3e98f5;
    color: white;
    font-size: 1.5rem;
    margin-left: 1rem;
    outline: none;
    padding: 0.5rem;
`

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

class InputForm extends Component {
    constructor() {
        super()

        this.state = {
            title: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const { title } = this.state
        this.props.addArticle({ title })
        this.setState({ title: "" })
    }

    render() {
        const { title } = this.state
        return (
            <form onSubmit={ this.handleSubmit }>
                <div>
                    <Label htmlFor="title">Add Title</Label>
                    <Input type="text" id="title" value={ title } onChange={ this.handleChange } />
                </div>
                <SubmitButton type="submit">SUBMIT</SubmitButton>
            </form>
        )
    }
}

const Form = connect(null, mapDispatchToProps) (InputForm)

export default Form