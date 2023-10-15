import React from 'react'
import { globalContext } from '../../App'
import Login from '../login/Login';

export const Homepage = () => {
    const {token}=React.useContext(globalContext) ?? {undefined};
    console.log(token)
  return (
    <div className='flex flex-column justify-center align-center'>
        <div className="header">
            Some quirky intro to the website
        </div>
        <div>
            OMG is it happening?
            !token && <Login/>
        </div>
    </div>
  )
}
