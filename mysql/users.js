
const connection = require('./db');
const db = require('./db');

const findAll = ()=>{
const command = `SELECT * FROM BOOKS `
db.query(command,(err,result)=>{
  if(err) throw err;
res.json(result) 
});
}
const updateBook=()=>{
  const query = `u`;
  const data = [req.body.title,req.body.author,req.body.published_at,req.body.price];
connection.query(query,data,(err,result)=>{
  if(err)throw err;
  res.json(result);
})
}

const deleteBook =()=>{
  const query = `DELETE FROM Book
  WHERE id =?`;
  const data =[req.params.id];
  connection.query(query,data,(err,result)=>{
    if(err) throw err;
    res.json(result);
  })

}
const orderById =()=>{
  const query = `select * from books order by id desc`

  db.query(query , (err,result)=>{
      if(err)throw err ;
      console.log(result)
  })
}

const updatePrice =()=>{
  const query = `INSERT INTO users(price) VALUES (?)`
const data = [book1.price]
connection.query(query,data,(err,result)=>{
  if (err) throw err;
  res.json(result) 
})
}
const book1={
  price="300"
}
const insertBook = ()=>{
  const query = `INSERT INTO users(title,author,published_at,price) VALUES (?,?,?,?)`
const data = [book.title,book.author,book.published_at,book.price]
connection.query(query,data,(err,result)=>{
  if (err) throw err;
  res.json("complete") 
})
}

const book ={
  title:"about",
  author:"ahmad",
  published_at:2009,
  price:200
}
const isNull =()=>{
  const query = `select * from books where price is not null`

  db.query(query , (err,result)=>{
      if(err)throw err ;
      console.log(result)
  })
}
insertBook(book)
module.exports={findAll,insertBook,updatePrice,updateBook,deleteBook,orderById,isNull}