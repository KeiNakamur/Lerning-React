import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
 import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
  // uriでどこにアクセスしにいくのかを指定(今回のbackendではlocalhost:4000が立ち上がっているのでlocalhost:4000と指定)
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* apollo/client内にApolloProviderがあるのでAppを囲うことでアプリ全体に適用させる */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
