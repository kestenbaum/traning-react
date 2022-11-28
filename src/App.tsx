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

  //useEffect
  useEffect( () => {
     axios.get(`${http}/todos`).then(response => setTodos(response.data))
  }, [])

  const getList = () => todos.map(element => {
      return <li key={element.id}>{element.title}</li>
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
        {getList()}
    </div>
  );
}

export default App;
