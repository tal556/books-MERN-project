import React,{useState,useEffect} from 'react'
import './Home.css'
import {getAllBooks} from '../../services/bookService'

export default function Home() {
    const [books, setBooks] = useState([]);
    useEffect(getBooks, [])

    function getBooks() {
        getAllBooks().then((res) => { setBooks(res) })
    }
    return (
        <div>
            
            
            {books ? React.Children.toArray(books.map((item) => { return  <div><h3>{item.name}</h3> <h3>{item.numberOfPages}</h3></div>})) : ''}
        </div>
    )
}
