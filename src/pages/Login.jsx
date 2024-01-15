import React, { useContext } from 'react'
import MyButton from '../Components/UI/button/MyButton'
import MyInput from '../Components/UI/input/MyInput'
import { AuthContext } from '../context/context'

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

  return (
    <div>
        <h1 className='login'>Log In</h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder="User name"/>
            <MyInput type="password" placeholder="User password"/>
            <MyButton>Enter</MyButton>
        </form>
    </div>
  )
}

export default Login