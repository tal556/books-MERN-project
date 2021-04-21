import React, { useState } from "react";
import "./AddBook.css";
import { postBook } from "../../services/bookService";
import TextField from "@material-ui/core/TextField";
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import BackspaceIcon from "@material-ui/icons/Backspace";

export default function AddBook() {
  const [name, setName] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(1);

  function updateBooksName(event) {
    setName(event.target.value);
  }
  function updateBookNumberOfPages(event) {
    setNumberOfPages(parseInt(event.target.value));
  }
  function saveBook(event) {
    event.preventDefault();
    const bookToSave = { name, numberOfPages };
    postBook(bookToSave).then((res) => {
      alert(`user created successfully!`);
    });
  }
  return (
    <div className="addBookDiv">
      <h1>add a book</h1>
      <form onSubmit={saveBook} className="formAddBook">
        <div>
          <label htmlFor="name">Book Name:</label>
          <Input onChange={updateBooksName}></Input>
        </div>
        <div>
          <label htmlFor="BookNumberOfPages">Number Of Pages:</label>
          <Input onChange={updateBookNumberOfPages} type="number"></Input>
        </div>
        <Button variant="outlined" type="submit" startIcon={<SaveIcon />}>
          SAVE
        </Button>
        <Button variant="outlined" type="reset" startIcon={<BackspaceIcon />}>
          RESET
        </Button>
      </form>
    </div>
  );
}
