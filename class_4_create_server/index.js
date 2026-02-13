const http = require('http');

const server = http.createServer((req,res)=>{
    // res.end("Hello rahul kumar")

    if(req.url==="/"){
        res.end("Hello rahul kumar")
    }
    else if(req.url==="/contact"){
        res.end("this is contact page")
    }
    else if(req.url==="/about"){
        res.end("this is about page")
    }
    else{
        res.end("error page not found" )
    }
})


server.listen(4000,()=>{
    console.log('server is running on port 4000')
})