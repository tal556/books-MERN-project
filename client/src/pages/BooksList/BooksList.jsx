import React from "react";
import "./BooksList.css";
import TableCom from "../../components/table/TableComponent";
import {getAllBooks} from '../../services/bookService'

export default function BooksList() {
//   const [books, setBooks] = useState([]);
//   useEffect(getBooks, []);

//   function getBooks() {
//     getAllBooks().then((res) => {
//       setBooks(res);
//     });
//   }
  return (
    <div>
      <TableCom />
    </div>
  );
}
