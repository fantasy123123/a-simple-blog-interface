const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const cors=require('cors');

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors())

let user={
    '账号':"111111",
    '昵称':"dk睡不醒.",
    '邮箱':'1455045838@qq.com',
    '电话':"19167012617",
    '个性签名':'这是个性签名'
};

let data=[
    {
    'key':'2023/9/4 21:52:55',
    'author':'dk睡不醒.',
    'avatar':'/avatar.img',
    'title':'震惊！一男子深夜进入母猪圈，竟是为了......',
    'content':'震惊！一男子深夜进入母猪圈，竟是为了做这些事！下面跟随小编一起看看该男子究竟做了什么伤天害理的事情吧！',
    'time':'2023/9/4 21:52',
    'like':0,
    'star':0,
    'view':0,
    'ifLike':false,
    'ifStar':false
    },
    {
        'key':'2023/9/4 20:55:21',
        'author':'dk睡不醒.',
        'avatar':'/avatar.img',
        'title':'震惊！一男子深夜进入公猪圈，竟是为了......',
        'content':'震惊！一男子深夜进入公猪圈，竟是为了做这些事！下面跟随小编一起看看该男子究竟做了什么伤天害理的事情吧！',
        'time':'2023/9/4 20:55',
        'like':0,
        'star':0,
        'view':0,
        'ifLike':false,
        'ifStar':false
    },
    {
        'key':'2023/9/4 18:52:30',
        'author':'dk睡不醒.',
        'avatar':'/avatar.img',
        'title':'震惊！一男子深夜进入小黑屋，竟是为了......',
        'content':'震惊！一男子深夜进入小黑屋，竟是为了做这些事！下面跟随小编一起看看该男子究竟做了什么伤天害理的事情吧！',
        'time':'2023/9/4 18:52',
        'like':0,
        'star':0,
        'view':0,
        'ifLike':false,
        'ifStar':false
    },
]

app.get('/user',(req,res)=>{
    res.send(user);
})

app.get('/data',(req,res)=>{
    res.send(data);
})

app.listen(5000,()=>{
    console.log('running')
})