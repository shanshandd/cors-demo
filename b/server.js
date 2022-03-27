let http = require('http');
let url = require('url');
let port = process.argv[2];
let fs = require('fs');

if (!port) {
    console.log('请指定端口号');
    process.exit(1);
}
let server = http.createServer(function (req, res) {
    let params = url.parse(req.url, true)
    let pathWithQuery = req.url
    console.log(params)
    let path = params.pathname
    let query = params.query
    console.log('有请求发送过来了！路径是' + pathWithQuery)

    if (path === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.write(fs.readFileSync('b.html'))
        console.log('请求一次')
        res.end()
    } else if (path === '/b.js') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        res.write(fs.readFileSync('b.js'))
        res.end()
    } else if (path === '/aa.json') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/json;charset=utf-8')
        res.write(fs.readFileSync('aa.json'))
        res.end()
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.write('您输入的路径不存在')
        res.end()
    }

})

server.listen(port)
console.log('监听' + port + '成功\n请打开http://localhost:' + port)