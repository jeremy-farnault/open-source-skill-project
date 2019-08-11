import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '../../core/configureStore'
import { initialState } from '../../Interfaces/store'
import { config } from '../../config'
import { AppContainer } from './AppStyled'

const store = configureStore(initialState)

export const client = new ApolloClient({
  uri: config.apolloClient
})

export const App = memo(() => {
  return (
    <Provider store={store} key={'provider'}>
      <ApolloProvider client={client}>
        <AppContainer></AppContainer>
      </ApolloProvider>
    </Provider>
  )
})
