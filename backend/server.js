const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')


const userRoute = require('./routes/userRoute')

dotenv.config()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.URI).then(()=>{
    console.log("connect has been made with mongoDB")
    app.listen(process.env.PORT || 8000, (err) => {
        if(err) confirm.log(err)
  console.log(`Example app listening on port `)
})
}).catch((error)=>{
    console.log("error",error)
})

app.use(userRoute)


