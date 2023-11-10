import ShowBlogList from "./ShowBlogList";
import ShowDetailBlog from "./ShowDetailBlog";
import {useState} from "react";
import {IconEmpty} from "@arco-design/web-react/icon";
import '../css/blogList.css'

const BlogList=({blogList,setBlogList,clear,getChangedBlog,key})=>{

    const [showList,setShowList]=useState(true)
    const [blog,setBlog]=useState()

    function change(value){
        setShowList(value)
    }

    function getBlog(value){
        setBlog(value)
    }

    function deleteBlog(value,index){
        setShowList(value)
        clear(index)
    }

    function Show(){
        if(blogList.length===0){
            return <div style={{textAlign:'center',fontSize:25,color:'grey'}}>
                <br/><br/>
                <IconEmpty />
                <br/>
                暂无数据
            </div>
        }
        else {
            if(showList){
                return <ShowBlogList blogList={blogList} setBlogList={setBlogList} change={change} getBlog={getBlog}/>
            }
            else return <ShowDetailBlog change={change} blog={blog} deleteBlog={deleteBlog} getChangedBlog={getChangedBlog} />
        }
    }

    return(
        <Show/>
    )
}

export default BlogList