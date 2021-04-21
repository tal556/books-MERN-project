
// consist action type strings
export const ADD_BOOK = "ADD_BOOK";

export const SHOW_BOOKS = "SHOW_BOOKS";

export const UPDATE_BOOK = "UPDATE_BOOK";

export const DELETE_BOOK = "DELETE_BOOK";


export const addBook =(bookItem) =>{
    return {type :ADD_BOOK, payload:bookItem}
}

export const showBooks = () =>{
    return {type:SHOW_BOOKS}
}

export const deleteBook =(bookId)=>{
    return {type:DELETE_BOOK,payload:bookId}
    
}