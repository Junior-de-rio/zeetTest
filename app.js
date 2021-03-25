let express = require('express')

let app = express();
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    next()

})
app.use(express.urlencoded({extended:true}))
app.use(express.json({extended:true}))
app.use('/',(req,res)=>{
    res.status(200).json({response:'server running !!!'})
})
module.exports = app
