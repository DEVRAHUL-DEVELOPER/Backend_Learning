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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.use(express.json());

// app.get('/user',(req,res)=>{
//     res.send({name:'John Doe',age:30});
// });
// app.post('/user',(req,res)=>{
//     console.log(typeof req.body.age);
//     res.send('data saved successfully');
// });

// app.post('/product',(req,res)=>{
//     res.send({name:'Laptop',price:999});
// });

// app.get('/order',(req,res)=>{
//     res.send({id:12345,product:'Laptop',quantity:1});
// });
