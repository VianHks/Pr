import { IconButton } from '@material-ui/core'
import React from 'react'
import './Widgets.css'
import SearhIcon from '@material-ui/icons/Search'
import { useState } from 'react'
import Trendings from './Trendings'

function Widgets() {
const[value,setValue]=useState('')
    return (
        <div className='Widgets'>
            <div className='search_area'>
                <IconButton>
                    <SearhIcon/>
                </IconButton>
                <input placeholder='Search' className='Search_input' value={value} onchange={(e)=>{setValue(e.target.value)}}/> 
            </div>
            <div className='trending_area'>
                <h2>Your Trendings</h2>
            
            <hr className='dividers'/>
                
                <div className='trending_body'>
                    <Trendings heading="World News" body="100k" footer="100k People are tweeting"/>
                    <Trendings heading="People Might You Know" body="beard@gmail.com" footer="rafi@gmail.com"/>
                </div>
           
            </div>
            
        </div>
  )
}

export default Widgets
