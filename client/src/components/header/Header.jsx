import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Header() {
  return (
    <div className="mainHeader">

     
        <MenuIcon className="burger" />
      

      <div className="LinkList">
        
          <Link className="Link" to="/">
            HOME
          </Link>
          <Link className="Link" to="/add-book">
            NEW BOOK
          </Link>
          <Link className="Link" to="/books">
            BOOKS
          </Link>
        
      </div>

      
        <AccountCircleIcon className="avatar" />
      
    </div>
  );
}
