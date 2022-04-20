const express = require('express');
const app = express();


app.get('/',(req,res) => {
    console.log('Home endpoint');
})

app.listen(3000,()=> console.log('server running on port 3000'));