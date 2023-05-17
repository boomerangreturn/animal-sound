const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello Animal Sound')
})
app.get('/sound/:name', function (req, res) {
    // const p=req.params
    const {name}=req.params
    // const q=req.query
    if(name=='dog'){
        res.send({'sound':'멍멍'})
    } else if(name=='cat'){
        res.send({'sound':'야옹'})
    } else if(name=='pig'){
        res.send({'sound':'꿀꿀'})
    } else{
        res.send({'sound':'알수없음'})
    }       
})  
app.listen(3000)

