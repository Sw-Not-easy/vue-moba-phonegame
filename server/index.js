const express = require("express")

const app = express();

app.set('secret','asd123')

app.use(require('cors')()) //跨域
app.use(express.json())
app.use('/admin',express.static(__dirname + '/admin'))
app.use('/',express.static(__dirname + '/web'))
app.use('/uploads',express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)


app.listen(3000,()=>{
    console.log("http://localhost:3000");
})