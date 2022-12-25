import React from 'react'
import './Sidebar.css'
import SidebarOpt from './SidebarOpt'
import HomeIcon from '@material-ui/icons/Home'
import Profile from '@material-ui/icons/PermIdentity'
import setting from '@material-ui/icons/Settings'
import Logout from '@material-ui/icons/ExitToApp'
import { Button } from '@material-ui/core'
// import Twlogo from '@material-ui/icons/Twitter'
import { Twitter } from '@material-ui/icons'

function Sidebar() {
  return (
    <div className='sidebar'>

      <SidebarOpt 
      Text=""
      Icon={Twitter}
      Active={true}
      />
      <SidebarOpt
      Text="Home"
      Icon={HomeIcon}
      Active={true}
      />

      <SidebarOpt 
      Text="Profile"
      Icon={Profile}
      Active={false}
      />
      
      <SidebarOpt 
      Text="Setting"
      Icon={setting}
      Active={false}
      />
      <SidebarOpt 
      Text="Logout"
      Icon={Logout}
      Active={false}
      />
     

      
      <Button variant="outlined" className='tweeter_button' fullWidth>
      Tweet
      </Button>
    </div>
  )
}

export default Sidebar
