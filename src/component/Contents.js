
import AddBlog from "./AddBlog";
import {Button, Layout} from "@arco-design/web-react";
import BlogList from "./BlogList";
import {useState} from "react";

const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const Contents=()=>{
    const [title,setTitle]=useState('我的博客');
    const [button,setButton]=useState('添加博客');
    const [status,setStatus]=useState('');

    const [blogList , setBlogList]=useState([{
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
    ]);

    const [key,setKey]=useState('');
    function clear(value){
        for(let i=0;i<blogList.length;i++)
        {
            if(value===blogList[i].key)
            {
                blogList.splice(i,1);
                setBlogList([...blogList])
            }
        }
    }

    function changeContent(){
        if(button==='添加博客'){
            setButton('取消添加');
            setTitle('添加博客');
            setStatus('danger')
        }
        if(button==='取消添加'){
            setButton('添加博客');
            setTitle('我的博客');
            setStatus('')
        }
    }

    function getNewBlog(value){
        setButton('添加博客');
        setTitle('我的博客');
        setStatus('');
        blogList.unshift(value);
        setBlogList([...blogList])
    }

    function getChangedBlog(value,key){
        for(let i=0;i<blogList.length;i++)
        {
            if(value.key===blogList[i].key)
            {
                blogList.splice(i,1,value);
                setBlogList([...blogList])
            }
        }
        setKey(key);
    }

    function ShowContent(){
        if(button==='添加博客'){
            return <BlogList blogList={blogList} setBlogList={setBlogList} clear={clear} getChangedBlog={getChangedBlog} key={key}/>
        }
        if(button==='取消添加'){
            return  <AddBlog getNewBlog={getNewBlog}/>
        }
    }


    return ( <Layout>
            <Header>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <img src={'/logo.png'} alt={'logo'} height={60} style={{paddingLeft:'10px'}}/>
                    <h1 style={{position:'relative',right:'10%'}}>{title}</h1>
                    <Button status={status} type={'primary'} style={{marginRight:'25px'}} size={'large'} onClick={changeContent}>{button}</Button>
                </div>
            </Header>
            <div style={{width:'100%',backgroundColor:'gray',height:'0.5px'}}/>
            <Content>
                <ShowContent/>
            </Content>
        </Layout>
    )
}

export default Contents