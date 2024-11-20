import express, { urlencoded } from 'express';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let library = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, isAvailable: true },
    { id: 2, title: '1984', author: 'George Orwell', year: 1949, isAvailable: true },
    { id: 3, title: 'Moby Dick', author: 'Herman Melville', year: 1851, isAvailable: true }
];

app.get('/', (req, res) => {
    res.send('Welcome to the Library API');
});

app.get('/books/', (req, res) => 
    {res.send((library))}
);


// add book
app.post('/books', (req, res) => {
    const book = {
        id : library.length + 1,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        isAvailable: true
    };
    library.push(book);
    res.send(book);
});

app.get('/books/available', (req, res) => {
    const availableBooks = library.filter((a) => a.isAvailable);
    res.send(availableBooks);
});

app.post('/books/borrow', (req,res) => {
    const book = library.find(book => book.title === req.body.title && book.isAvailable);
    if (!book)
        return res.status(400).send({error : "Book is not available or is already borrowed."});
    book.isAvailable = false;
    res.send(book);
});

app.post('/books/return', (req,res) => {
    const book = library.find(book => book.title === req.body.title && !book.isAvailable);
    if (!book)
        return res.status(400).send({error : "Book is non-existent or is not borrowed."});
    book.isAvailable = true;
    res.send(book);
});


