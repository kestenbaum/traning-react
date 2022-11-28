import React, {FC, useEffect, useId, useState} from 'react';
import axios from "axios";

interface Todo {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

const App:FC = () => {
  //id
  const id = useId()

  //http
  const http:string = 'https://jsonplaceholder.typicode.com'

  //useState
  const [state] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [valueInput, setValueInput] = useState<string>('')
  const [page, setPage] = useState<number>(1)

  //useEffect
  useEffect( () => {
     axios.get(`${http}/todos?_page=10&_limit=10`).then(response => setTodos(response.data))
  }, [])

  //create jsx element list
  const getList = () => todos.map(element => {
      return <li key={element.id}>{element.title}</li>
  })

  useEffect(() => {
      axios.get(`${http}/todos?_page=${page}&_limit=10`).then(response => setTodos(response.data))
  }, [page])

  //pagination
  const pagination = Array.from(Array(10).keys()).map(element => {
      //setPage(element + 1)
      return <button onClick={() => setPage(element + 1)}>{element + 1}</button>
  })
  return (
    <div className="App">
      <label htmlFor={id}>Search:</label>
      <input
          id={id}
          value={valueInput}
          onChange={event => setValueInput(event.target.value)}
      />
        {state}
        <div>List: {todos.length}</div>
        {getList()}
        {pagination}
    </div>
  );
}

export default App;
