import {FC, useEffect, useId, useState} from 'react';
import {Todo} from "../../interface";

import axios from "axios";

const Pagination:FC = () => {
    const id = useId()
    const http:string = 'https://jsonplaceholder.typicode.com'
    const limitItem = 10
    const [todos, setTodos] = useState<Todo[]>([])
    const [allTodos, setAllTodos] = useState<Todo[]>([])
    const [valueInput, setValueInput] = useState<string>('')
    const [page, setPage] = useState<number>(1)
    const [searchResult, setSearchResult] = useState<Todo[]>([])

    useEffect(() => {
        axios.get(`${http}/todos`).then(response => setAllTodos(response.data))
        axios.get(`${http}/todos?_page=${page}&_limit=${limitItem}`).then(response => setTodos(response.data))
    }, [page])

    useEffect(() => {
        const result  = allTodos.filter(element => element.title)
        setSearchResult(result)
        valueInput.length === 0 && setSearchResult([])
    }, [allTodos, valueInput])

    const pagination = Array.from(Array(allTodos.length / limitItem).keys()).map(element => {
        return <button onClick={() => setPage(element + 1)} key={element}>{element + 1}</button>
    })

    const getList = () => todos.map(element => <li key={element.id}>{element.id} {element.title}</li>)

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
            {searchResult.length === 0 ? getList() : <>list </>}
            {pagination}
        </div>
    );
};

export default Pagination;