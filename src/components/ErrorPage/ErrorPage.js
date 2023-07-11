import React from 'react'
import errorImage from './404error.png'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <img src={errorImage} className='error'/>
  )
}

export default ErrorPage;