import React from 'react'
import './Post.css'
import PostDetail from './Postdetail'
import { useState } from 'react';
import { useEffect } from 'react';

function Post() {
  const [vpost, setVpost] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:5000/getalltweet")
            .then((response) => response.json())
            .then(x => {
                setVpost(x)
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    const posting = vpost.map(y => {
      return (
        <div className='Post'>
          <PostDetail
          userName={y.nick}
          userImg="https://i.pravatar.cc/150?img=1"
          userId={y.userid}
          time={y.postdte}
          postText={y.Tweet}
          varify={true}
          />
        </div>
      )

    })
  return(
    <div>{posting}</div>
    
  )
}

export default Post
