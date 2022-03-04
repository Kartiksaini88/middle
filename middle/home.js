let express = require("express")
const res = require("express/lib/response")

let app = express()


app.get("/books",middle,(req,res)=>{
    return res.send("fecthing all books")
})


app.get("/books/:HarryPotter",name,(req,res)=>{
  return res.send({bookName: "HarryPotter"})
})


function name(req,res,next){
  if(req.name=="/books/:HarryPotter"){
    req.role = "HarryPotter"
  }
  else{
    req.role ="Not found"
  }
  next()
}

function middle(req,res,next){
  if(req.path==="/books"){
    req.role = "books"
  }
  else{
    req.role = "Somebody"
  }

  next()
}


app.listen(4000,()=>{
  console.log("Hello")
})













// app.use(check)

// app.get("/user",(req,res)=>{
//   return res.send({route:"user",role:req.role})
// })

// app.get("/admin",(req,res)=>{
//   return res.send({route:"adimn",role:req.role})
// })


// function check(req,res,next){
//   if(req.path=="/user"){
//     req.role ="user"
//   }
//   else if(req.path="/admin"){
//     req.role = "admin"
//   }
//   else{
//     req.role="somebody"
//   }
//   next()
// }


// app.listen(4000,()=>{
//   console.log("hello")
// })

