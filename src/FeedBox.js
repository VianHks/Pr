import React from 'react'
import './FeedBox.css'
import BubbleChartIcon from '@material-ui/icons/BubbleChart'
import { Avatar, Button } from '@material-ui/core'
import { useState} from 'react'

function FeedBox() {
  const [tweettext,setTweettext]=useState('');
  const submitForm=(e)=>{
    e.preventDefault();
    setTweettext('')
  }
    return (
    <div className='FeedBox'>
      <div className='feedbox_header'>
        <h2>Home</h2>
        <BubbleChartIcon/>
      </div>
      <div className='feedbox_body'>
        <form>
            <div className='feedbox_input'>
                <Avatar className='Avatar' src='https://i.pravatar.cc/150?img2' />
                <div className='feedbox_input_fields'>
                    <input className='tweet_input' placeholder="Whats Happening" onChange={(e)=>{setTweettext(e.target.value)}} value={tweettext}/>
                </div>
                
            </div>
            <div className='feedbox_submit'>
                  <Button className='Button__Submit' onClick={submitForm}>Tweet</Button> 
            </div>
        </form>
      </div>

    </div>
  )
}

export default FeedBox
