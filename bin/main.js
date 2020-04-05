const download = require('download-git-repo');
const program = require('commander');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

const rootName = path.basename(process.cwd()); //命令执行目录
const dir = glob.sync('*'); // 执行目录下的文件
if(dir.length){
    // 目录不为空
    console.log("请选择空文件初始化")
}else {
    // 目录为空，开始下载
    (async function(){
        let temUrl = await downFolder(rootName);
        console.log('初始化完成');
    })();
}

function downFolder(target) {
    return new Promise((resolve, reject)=>{
        download('uoau/neon-vue-templets', './', function (err) {
            if(err){
                reject(err)
            }else {
                resolve(target);
            }
        })
    })
}


