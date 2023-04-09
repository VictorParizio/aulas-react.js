import { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {

  const [produtos, setProdutos] = useState({})

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=10')
      .then((response) => setProdutos(response.data.products))
  }, [])

  return (
    <>
      <h1>React - Axios</h1>
      <hr />
      <ul >
        {Object.keys(produtos).map((key) => {
          return (
            <div key={produtos[key].id}>
              <li>{produtos[key].title}</li>
              <li>{produtos[key].description}</li>
              <li>
                <img src={produtos[key].thumbnail} />
              </li>
            </div>
          )
        })}
      </ul>
    </>
  )
}