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
        res.write(fs.readFileSync('a.html'))
        res.end()
    } else if (path === '/a.js') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        res.write(fs.readFileSync('a.js'))
        res.end()
    } else if (path === '/aa.json') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/json;charset=utf-8')
        // res.setHeader('Access-Control-Allow-Origin', '*')
        // res.setHeader('Access-Control-Allow-Credentials', true)

        res.write(fs.readFileSync('aa.json'))
        res.end()


    } else if (path === '/aa.js') {
        
        res.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        // referer检查
        if(req.headers.referer.indexOf('http://localhost:9999') === 0){
            res.statusCode = 200
            let string = 'window["{{xxx}}"]({{json}})';
            let jsonData = fs.readFileSync('aa.json').toString();
            string = string.replace('{{xxx}}',query.callback).replace('{{ json }}', jsonData).replace('{{json}}', jsonData);
            res.write(string)
            res.end()
        }else{
            res.statusCode = 404
            res.write('不存在')
            res.end()
        }
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.write('您输入的路径不存在')
        res.end()
    }

})

server.listen(port)
console.log('监听' + port + '成功\n请打开http://localhost:' + port)