import React,{useEffect,useState} from "react";
import "./BooksList.css";
import TableCom from "../../components/table/TableComponent";
import {getAllBooks} from '../../services/bookService'

export default function BooksList() {
  const [books, setBooks] = useState([]);
  useEffect(getBooks, []);

  function getBooks() {
    getAllBooks().then((res) => {
      setBooks(res);
    });
  }

const columns = [
  {
   name: "_id",
   label: "ID",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "name",
   label: "name",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "numberOfPages",
   label: "number Of Pages",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "state",
   label: "State",
   options: {
    filter: true,
    sort: true,
   }
  },
 ];
 
//  const data = [
//   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
//   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
//   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
//   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
//  ];
 
 const options = {
   filterType: 'checkbox',
 };

  return (
    <div>
      <TableCom data={books} title={"books library"} columns={columns} options={options} />
    </div>
  );
}
