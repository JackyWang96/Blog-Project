
//require类似于import
/*调用 express 函数“express()”并将新的 Express 应用程序放入 app 变量中（以启动新的 Express 应用程序）。
这就像您正在创建一个类的对象。其中“express()”就像类，app 是新创建的对象。*/
const express=require('express')
const app=express()



//用回调函数来创建监听器
app.listen(8080,()=>{
    console.log('Server is running on ');
} )