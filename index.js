const http = require('http')

http.createServer((request) => {
    console.log('DEBUG:index.js():4 =====================>', request.url)
}).listen(3000)
