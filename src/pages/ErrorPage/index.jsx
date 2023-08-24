import React from 'react';
import style from "./style.module.css"

const ErrorPage = () => {
  return (
    <div className='container'>
            <div className={style.wrapper}>
                <h1>404</h1>
                <p>Oops, something went wrong. Please try again.</p>
            </div>
    </div>
  )
}

export default ErrorPage;
