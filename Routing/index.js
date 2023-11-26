const http = require('http')
const fs = require('fs')
const url = require('url')

http
  .createServer((req, res) => {
    const filename = `./pages${url.parse(req.url, true).pathname}.html`

    fs.readFile(filename, (err, data) => {
      try {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
      } catch (error) {
        fs.readFile('./pages/notFound.html', (err, data) => {
          res.writeHead(404, { 'Content-Type': 'text/html' })
          res.write(data)
          console.error(error);
          return res.end()
        })
      }
    })
})

.listen(8080)
