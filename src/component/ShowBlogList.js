import React from 'react';
import {Comment, Avatar, Button} from '@arco-design/web-react';
import {
    IconHeart,
    IconStar,
    IconStarFill,
    IconHeartFill, IconEye,
} from '@arco-design/web-react/icon';
import '../css/blogList.css'

const ShowBlogList=({blogList,setBlogList,change,getBlog})=>{
    return(<div>
        {blogList.map((value, index)=>
            {
                return (
                    <div style={{borderRadius:'5px',marginLeft:'60px',marginRight:'60px',marginTop:'35px',marginBottom:'35px',border:'solid 1px grey',backgroundColor:'white'}}>
                        <Comment
                            style={{marginTop:'10px',marginLeft:'30px',marginRight:'30px',marginBottom:'10px'}}
                            actions={[
                                <Button className='custom-comment-action' style={{backgroundColor:'white'}} key='heart' onClick={() => {value.ifLike=!value.ifLike;return setBlogList([...blogList])}}>
                                    {value.ifLike ? (
                                        <IconHeartFill style={{ color: '#f53f3f' }}/>
                                    ) : (
                                        <IconHeart />
                                    )}
                                    { value.like + (value.ifLike ? 1 : 0)}
                                </Button>,
                                <Button className='custom-comment-action' style={{backgroundColor:'white'}} key='star' onClick={() => {value.ifStar=!value.ifStar;return setBlogList([...blogList])}}>
                                    {value.ifStar ? (
                                        <IconStarFill style={{ color: '#ffb400' }}/>
                                    ) : (
                                        <IconStar />
                                    )}
                                    { value.star + (value.ifStar ? 1 : 0)}
                                </Button>,
                                <span className='custom-comment-action' key='view'>
                                    <IconEye /> {value.view}
                                </span>,
                            ]}
                            author={blogList[index].author}
                            avatar={
                                <Avatar size={75}>
                                    <img
                                        alt='avatar'
                                        src={blogList[index].avatar}
                                    />
                                </Avatar>
                            }
                            content={<div>
                                <Button style={{fontSize:'25px',color:'blue',backgroundColor:'white',border:0}} onClick={()=>{change(false);getBlog(value);value.view++;}}>{blogList[index].title}</Button>
                                <div style={{fontSize:'16px',marginLeft:15,marginTop:5}}>{blogList[index].content.length<202?blogList[index].content:blogList[index].content.substring(0,202)+'......'}</div>
                            </div>}
                            datetime={blogList[index].time}
                        />
                    </div>
                )
            }
        )}
    </div>)
}

export default ShowBlogList