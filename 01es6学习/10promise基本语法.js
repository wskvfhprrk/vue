//promise是异步编程解决方案：如文件读取、ajax请求等
//引用node
const fs = require('fs')
//Promise有三个状态：初始化、成功、失败
//resolve为成功调用函数，reject为失败调用函数
const p=new Promise((resolve,reject)=>{
    //执行异步操作
    fs.readFile('./text.txt',(err,data)=>{
        //如果读取失败了
        if(err){
            // console.log('读取文件失败')
            // return
            reject(err)
        }
        //读取成功的话
        // console.log(data.toString())
        resolve(data) //成功把值传给resolve
    })
})

//当promise成功调用时会使用p.then,错误时p.catch
p.then((response)=>{
    console.log(response.toString())
})
// p.catch((response)=>{
//     console.log(response.toString())
// })