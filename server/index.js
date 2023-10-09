const blogRouter = require('../server/routes/blogRouter.js')
const userRouter = require('../server/routes/userRouter.js')
const express = require('express')
var cors = require('cors')


const app = express()
const PORT = 2000
app.use(express.json())

// app.use(express.static(__dirname + '/../front/public'));
app.use(cors())


app.use('/blogs',blogRouter)
app.use('/users',userRouter)


app.listen(PORT, () =>{
        console.log("Server is Successfully Running"+ PORT)
    }
)
module.exports.app=app