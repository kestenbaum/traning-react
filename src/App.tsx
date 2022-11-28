import React, {useEffect, useState} from 'react';
import axios from "axios";

interface Todo {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

function App() {
  const todo = 'https://jsonplaceholder.typicode.com/todos/'

  //useState
  const [state] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  //useEffect
  useEffect(() => {
    axios.get(todo)
        .then(response => setTodos(response.data))
  }, [])

  return (
    <div className="App">
      {state}
      {todos.map(element => {
        return <li key={element.id}>{element.title}</li>
      })}
    </div>
  );
}

export default App;
