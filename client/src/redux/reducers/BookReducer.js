
import { ADD_BOOK, UPDATE_BOOK, SHOW_BOOKS,DELETE_BOOK } from '../actions'

export default function bookManager(state = { books: [] }, action) {
    switch (action.type) {
        case ADD_BOOK:
            return { books: [...state.books, action.payload] }
        case UPDATE_BOOK:
            return {}
        case SHOW_BOOKS:
            return {books : [...state.books] }
        case DELETE_BOOK:
            return {books : state.books.filter((book) =>book._id!== action.payload)}
        default:
            return state;
    }
}
