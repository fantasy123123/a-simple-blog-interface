import {Button} from "@arco-design/web-react";

const ShowBlog=({change,blog,deleteBlog,changeToEdit})=>{
    return (<div>
        <div style={{textAlign:'center'}}>
            <h1>{blog.title}</h1>
            <p style={{fontSize:15}}>作者：{blog.author} </p>
            <p style={{fontSize:15}}>时间：{blog.time}</p>
            <div style={{fontSize:20,marginLeft:100,marginRight:100}}>{blog.content}</div>
            <Button type={'primary'} size={'large'} style={{marginTop:50,marginLeft:800,marginRight:30}} onClick={()=>{change(true)}}>返回博客列表</Button>
            <Button type={'primary'} size={'large'} status={'warning'} style={{marginRight:30}} onClick={()=>{changeToEdit(true)}}>修改此博客</Button>
            <Button type={'primary'} size={'large'} status={'danger'} onClick={()=>{deleteBlog(true,blog.key)}}>删除此博客</Button>
        </div>
    </div>)
}

export default ShowBlog