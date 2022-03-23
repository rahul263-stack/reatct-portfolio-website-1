import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub}    from  'react-icons/fa'
import {FaKaggle} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkdin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com'  target="_blank"><FaGithub/></a>
        <a href='https://kaggle.com'  target="_blank"><FaKaggle/></a>
    </div>
  )
}

export default HeaderSocials