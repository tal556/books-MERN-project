import React, { useState } from "react";
import "./AddBook.css";
import {postBook} from '../../services/bookService'

export default function AddBook() {
  const [name, setName] = useState("");
  const [NumberOfPages, setNumberOfPages] = useState(1);

  function updateBooksName(event) {
    setName(event.target.value);
  }
  function updateBookNumberOfPages(event) {
    setNumberOfPages(parseInt(event.target.value) );
  }
  function saveBook(event) {
    event.preventDefault();
    const bookToSave = {name,NumberOfPages}
    postBook(bookToSave)
    .then(res => { alert(`user created successfully!`); });
    
  }
    return (
      <div className="addBookDiv">
        <h1>add a book</h1>
        <form onSubmit={saveBook} className="formAddBook">
          <div>
            <label htmlFor="name">Book Name:</label>
          <input onChange={updateBooksName} type="text" />
          </div>
          <div>
            <label htmlFor="BookNumberOfPages">Book NumberOfPages:</label>
          <input onChange={updateBookNumberOfPages} max={1000} min={1} type="number" />
          </div>
          
          <button type="submit">SAVE</button>
          <button type="reset">RESET</button>
        </form>
      </div>
    );
  
}
