import React from 'react';
import '../App.css';
import styled from 'styled-components'
import List from './List'
import Form from './Form'
import FetchList from './FetchList'

const Wrapper = styled.div`
  margin: auto;
  max-width: 1000px;
  padding: 1.5rem;
  width: 100%;
`

const App = () =>
  <Wrapper>
    <h2>Articles</h2>
    <Form />
    <List />
    <FetchList />
  </Wrapper>

export default App;