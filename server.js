//if (process.env.NODE_ENV !== 'production') {
   // require('dotenv').config()
 // }

require('dotenv').config()
const express = require('express')
const app = express()

const userRouter = require('./routes/user')
const postRouter = require('./routes/post')

const cors = (req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','*')
    res.header('Access-Control-Allow-Headers','*')
    next()
}

app.use(express.urlencoded({ limit:'50mb', extended:true }))
app.use(express.json({ limit: '50mb' }))
app.use(cors)

app.use('/user',userRouter)
app.use('/post',postRouter)

//If Production 
//Step 1 from Frontend: npm run build 
//Step 2 copy and paste dist folder from Frontend to root directory of where server.js exits
//Step 3 to add below script
if(process.env.NODE_ENV === "production"){
  app.use(express.static(__dirname + "/dist"))
  app.get("*",(req,res)=>{
    res.sendFile(__dirname + "/dist/index.html")
  })
}
//Step 4: git init
//Step 5 : git .add
//Step 6: git commit 'First Commit'
//Step 7: heroku cli to be installed then type: heroku login
//Step 8: heroku create Logitstics_SGT
//Step 9: heroku git:<name>
//Step 10:git push heroku HEAD:master




  const mongoose = require('mongoose')
  let uri = process.env.DATABASE_URL
  mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true})
  const db = mongoose.connection
  db.on('error', error => console.error(error))
  db.once('open', () => console.log('Connected to Mongoose Database'))

    const server = app.listen(process.env.PORT || 3000, () => {
    const port = server.address().port;
    console.log(`Server is listening on port ${port}`);
  });