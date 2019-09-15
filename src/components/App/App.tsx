import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import { withAuthenticator } from 'aws-amplify-react'
import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { NavigationBar, PageContent, TopBar } from '..'
import { config } from '../../config'
import { configureStore } from '../../core/configureStore'
import { initialState } from '../../Interfaces/store'
import { AppContainer } from './AppStyled'

const store = configureStore(initialState)

export const client = new ApolloClient({
  uri: config.apolloClient
})

const AppContent = memo(() => {
  return (
    <Provider store={store} key={'provider'}>
      <ApolloProvider client={client}>
        <AppContainer>
          <NavigationBar />
          <TopBar />
          <PageContent />
        </AppContainer>
      </ApolloProvider>
    </Provider>
  )
})

export const App = withAuthenticator(AppContent, { includeGreetings: true })
