const express = require ('express')
const app = express()
const port = 5000;




// define simple route
app.get('/', (req,res) =>{
      res.send("Hello the server")

})


// start the server

app.listen(port,()=>{
      console.log(`education course purchase the website${port}`);
})