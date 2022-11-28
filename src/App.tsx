import React, {FC, useEffect, useId, useState} from 'react';
import axios from "axios";

interface Todo {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

export const App:FC = () => {
  //id
  const id = useId()

  //http
  const http:string = 'https://jsonplaceholder.typicode.com'

  //limit
  const limitItem = 10

  //useState
  const [todos, setTodos] = useState<Todo[]>([])
  const [allTodos, setAllTodos] = useState<Todo[]>([])
  const [valueInput, setValueInput] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [searchResult, setSearchResult] = useState<Todo[]>([])

  //update date
  useEffect(() => {
      axios.get(`${http}/todos`).then(response => setAllTodos(response.data))
      axios.get(`${http}/todos?_page=${page}&_limit=${limitItem}`).then(response => setTodos(response.data))
  }, [page])

  useEffect(() => {
      const result  = allTodos.filter(element => element.title)
      setSearchResult(result)
      valueInput.length === 0 && setSearchResult([])
  }, [allTodos, valueInput])

  //pagination
  const pagination = Array.from(Array(allTodos.length / limitItem).keys()).map(element => {
      return <button onClick={() => setPage(element + 1)} key={element}>{element + 1}</button>
  })

    //create jsx element list
    const getList = () => todos.map(element => {
        return <li key={element.id}>{element.id} {element.title}</li>})


  return (
    <div className="App">
      <label htmlFor={id}>Search:</label>
      <input
          id={id}
          value={valueInput}
          onChange={event => setValueInput(event.target.value)}
      />
        <div>List: {todos.length}</div>
        <>Page: {page}</>
        {searchResult.length === 0 ? getList() : <>no</>}
        {pagination}
    </div>
  );
}

