import ShowBlog from "./ShowBlog";
import EditBlog from "./EditBlog";
import {useState} from "react";

const ShowDetailBlog=({change,blog,deleteBlog,getChangedBlog})=>{
    const [show,setShow]=useState(false)

    function changeToEdit(value){
        setShow(value)
    }

    function Show(){
        if(show===false) return <ShowBlog change={change} blog={blog} deleteBlog={deleteBlog} changeToEdit={changeToEdit}/>
        else return <EditBlog  blog={blog} changeToEdit={changeToEdit} getChangedBlog={getChangedBlog}/>
    }

    return(
        <Show/>
    )
}

export default ShowDetailBlog