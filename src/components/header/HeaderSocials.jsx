import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub}    from  'react-icons/fa'
import {FaKaggle} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/rahul-kumar-1ba550190/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/rahul263-stack'  target="_blank"><FaGithub/></a>
        <a href='https://www.kaggle.com/quantum360'  target="_blank"><FaKaggle/></a>
    </div>
  )
}

export default HeaderSocials