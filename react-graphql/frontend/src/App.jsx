import { gql, useQuery } from '@apollo/client'
import './App.css'

// これでBOOKS変数内にデータを取得できる
const BOOKS = gql`
  query {
    test{
      author
      title
    }
  }
`
console.log(BOOKS)

function Books(){
  // useQueryで指定したデータ型(BOOKS)をdataという変数名で格納
  const {loading, error, data} = useQuery(BOOKS);
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error</p>
  
  // dataを展開する際はreturn文で
  return data.test.map(({title, author}, index) => (
    <div key={index} >
      <p>
        {author} : {title}
      </p>
    </div>
  ))
}

function App() {

  return (
    <div className="App">
      <h2>GraphQL Client</h2>
      <Books />
    </div>
  )
}

export default App
