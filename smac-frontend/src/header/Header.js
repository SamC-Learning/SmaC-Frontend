import React from 'react'

import { Button } from '@material-ui/core'
import { Avatar } from '@mui/material'

import logoIcon from "../icons/logo.svg"
import sunIcon from "../icons/sun.svg"
import bellIcon from "../icons/bell.svg"

export default function Header() {
  return (
    <div className='flex items-center bg-[#53504D] '>
      <div className='flex-1'>
     <img src={logoIcon} alt="logo" className='my-5 ml-24 h-[70px]'/>
     </div>
      <button style={{textTransform:"none"}} className="text-[#F19CFF] font-bold text-base bg-[#060B1D] py-4 px-3 rounded-[13px]">Contact us</button>
     <img src={sunIcon} alt="logo" className='mx-6'/>
     <img src={bellIcon} alt="logo" className='mr-6'/>
     <Avatar src="https://assets-prd.ignimgs.com/2022/09/20/iron-man-motive-button-1663693168356.jpg" sx={{width:"64px", height:"64px"}} className="mr-12"/>
    </div>
  )
}
