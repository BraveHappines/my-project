
//Express
var express = require('express')
var port=process.env.PORT||3000
var app = express()  //创建一个APP实例
 
app.set('views','./views')
app.set('view engine','jade')
app.listen(port)
console.log('hello world start at'+ port);

//index page
app.get('/',function(req,res){
    res.render('index',{
        title:'imooc 首页'
    })
})
//detail page
app.get('/movie/:id',function(req,res){
    res.render('detail',{
        title:'imooc 详情页'
    })
})
//admin page
app.get('/admin/movie',function(req,res){
    res.render('admin',{
        title:'imooc 后台录入页'
    })
})

//list page
app.get('/admin/list',function(req,res){
    res.render('list',{
        title:'imooc 列表页'
    })
})

