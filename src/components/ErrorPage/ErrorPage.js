import React from 'react'
import errorImage from './404error.png'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <img src={errorImage} className='error-img' alt="404 Error: Page Not Found"/>
  )
}

export default ErrorPage;