import { ApolloProvider } from '@apollo/react-hooks'
import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { Filters, MainSection } from '..'
import { configureStore } from '../../core/configureStore'
import { initialState } from '../../Interfaces/store'
import { portfolioClient } from '../../utils/apolloClients'
import { AppContainer } from './AppStyled'

const store = configureStore(initialState)

export const App = memo(() => {
  return (
    <Provider store={store} key={'provider'}>
      <ApolloProvider client={portfolioClient}>
        <AppContainer>
          <MainSection />
          <Filters />
        </AppContainer>
      </ApolloProvider>
    </Provider>
  )
})
