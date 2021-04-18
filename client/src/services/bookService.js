let PORT = process.env.PORT || 8080
const BASIC_API = `http://localhost:${PORT}/`
// const API = process.env.NODE_ENV === 'production' ? 'https://books-app-mern-update.herokuapp.com/' : 'http://localhost:8080/'

async function callMyServer() {
    await fetch(BASIC_API)
        .then(res => res.json())
        .catch(err => alert(err))
}

async function getAllBooks(newBook) {
    try {
        return await fetch(BASIC_API + "books")
            .then(res => { return res.json() })
            .then(res => { return res.data })
            // .then(res => console.log(res))
    } catch (error) {
        console.log(error);
    }
}

async function postBook(newBook) {
    try {
        return await fetch(
            BASIC_API + "books",
            {
                method: "POST",
                body:JSON.stringify(newBook),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}

export {
    callMyServer,
    postBook,
    getAllBooks,

}

