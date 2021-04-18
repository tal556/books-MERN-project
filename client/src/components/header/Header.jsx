import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Header() {
  return (
    <div className="mainHeader">
      <MenuIcon className="burger" />
      <h2 className="title">Books-App</h2>

      <div className="LinkList">
        <Link className="Link" to="/">
          HOME
        </Link>
        <Link className="Link" to="/add-book">
          NEW BOOK
        </Link>
        <Link className="Link" to="/books">
          BOOKS LIST
        </Link>
      </div>

      <AccountCircleIcon className="avatar" />
    </div>
  );
}
