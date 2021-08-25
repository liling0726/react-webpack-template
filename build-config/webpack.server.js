const fs = require('fs');
const path = require('path');
const ASYNC_PREFIX = '/rest/*'


function handerAsyncRequest (req, res) {
    let data = '';
    const reqPath = req.path;
    fileUrl = path.join(__dirname, '..', 'mock', reqPath)
    try {
        const file = require(fileUrl);
        // 返回是一个函数
        if(typeof file === 'function'){
            data = file(req, res);
        }else{
            data = file
        }
    } catch (e) {
        console.log(e)
        data = e;
    }
    res.send(JSON.stringify(data));
}

exports.beforeServer =  function beforeServer (devServer,mockType) {
    if(mockType === 'server'){
        return 
    }
    devServer.app.get(ASYNC_PREFIX, handerAsyncRequest)
    devServer.app.post(ASYNC_PREFIX, handerAsyncRequest)
}
