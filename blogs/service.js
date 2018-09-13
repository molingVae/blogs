const url = require("url")
const fs = require("fs")
const http = require("http")
const path = require("path")

//测试git

//搭建node服务器
http.createServer(function (req, res) {

    var pathname = __dirname + url.parse(req.url).pathname;
    if (path.extname(pathname) == "") {
        pathname += "/";
    }
    if (pathname.charAt(pathname.length - 1) == "/") {
        pathname += "index.html";
    }
   //判断路径是否存在可读
    fs.access(pathname,fs.constants.F_OK |fs.constants.R_OK,function (err) {
        if (!err) {
            switch (path.extname(pathname)) {
                case ".html":
                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    });
                    break;
                case ".js":
                    res.writeHead(200, {
                        "Content-Type": "text/javascript"
                    });
                    break;
                case ".css":
                    res.writeHead(200, {
                        "Content-Type": "text/css"
                    });
                    break;
                case ".gif":
                    res.writeHead(200, {
                        "Content-Type": "image/gif"
                    });
                    break;
                case ".jpg":
                    res.writeHead(200, {
                        "Content-Type": "image/jpeg"
                    });
                    break;
                case ".png":
                    res.writeHead(200, {
                        "Content-Type": "image/png"
                    });
                    break;
                default:
                    res.writeHead(200, {
                        "Content-Type": "application/octet-stream"
                    });
            }

            fs.readFile(pathname,function (err, data) {
                res.end(data);
            });
        } else {
            res.writeHead(404, {
                "Content-Type": "text/html"
            });
            res.end("<h1>404 Not Found</h1>");
        }
    });
}).listen(8080);
console.log("Server running at localhost");