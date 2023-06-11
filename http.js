const http = require('http');

//req = request && res = response.
const server = http.createServer((req , res)=>{
   if (req.url === '/'){
    res.end('welcome to our homePage')
    return
   }
   if (req.url === '/about'){
    res.end(`
    <p>Here is our short history</p>
    <a href='/'>Home</a>
    `)
    return
   }
     res.end(`
        <h1>Oops, you ran into an error</h1>
        <p>Page does not exist</p>
        <a href='/'>Home</a>
    `)
})
server.listen(5000)