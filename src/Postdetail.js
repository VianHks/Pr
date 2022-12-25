import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Postdetail.css'
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined'
import Delete from '@material-ui/icons/Delete'

function PostDetail({userName,userImg,userId,time,postText,varify}) {
  return (
    <div className='Postdetail'>
      <div className='post_header'>
        <Avatar src={userImg}/>
        <div className='post'>
            <h2>{`${userName}${varify && '@gmail.com'} ${userId}-${time}`}</h2>
            <h2 className='posttext'>{postText}</h2>
        </div>
      </div>
      <div className='post_body'>
        <div className='post_actions'>
            <div className='action_option'>
            <IconButton>
                <FavoriteBorderOutlined/>
            </IconButton>                
            </div>
            <div className='action_option'>
            <IconButton>
                <Delete/>
            </IconButton>    
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
