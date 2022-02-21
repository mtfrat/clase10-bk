const express = require('express')
const handlebars = require ('express-handlebars')

const productsRouter = require("./routes/products")

const app = express()
const PORT =  8080 

const server = app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)})

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(__dirname+'/public'))
app.use('/products',productsRouter)

app.engine('handlebars',handlebars.engine())
app.set('views', __dirname +'/views')
app.set('view engine','handlebars')


app.get('/',(req,res) => {
    res.render('home',{

    })
})

app.get('/products',(req,res) => {
    let products = {}
    products = req.query
    res.render('productsPage',{
        products:products
    })
})