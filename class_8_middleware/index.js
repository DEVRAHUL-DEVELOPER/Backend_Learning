import express from "express";

const app = express();

const port = 5000;
app.use(express.json());

const BookStore = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { id: 6, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
  { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien" },
];

app.get("/books", (req, res) => {
  res.send(BookStore);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const book = BookStore.find((info) => info.id === id);
  res.send(book);
});



app.post('/books', (req,res)=>{
    const newBook = req.body;
    BookStore.push(newBook);
    res.send('Book added successfully');

})

app.patch('/books', (req,res)=>{
    const book = BookStore.find(info => info.id===req.body.id)
    if(req.body.name){
    book.name = req.body.name;
    }
    if(req.body.author){
    book.author = req.body.author;
    }
    if(req.body.title){
    book.title = req.body.title;
    }

    console.log(book);

    res.send('Book updated successfully');

})


app.put('/books', (req, res) => {

    const id = Number(req.body.id);
    console.log(id);

    // const book = BookStore.find(info => info.id === id);

    // // If book not found
    // if (!book) {
    //     return res.status(404).send("Book not found");
    // }

    // // Update values
    // book.name = req.body.name;
    // book.author = req.body.author;
    // book.title = req.body.title;

    // console.log(book);

    res.send("Book updated successfully");
});
    

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

