import React, { useContext, useState } from 'react'
import MyButton from '../Components/UI/button/MyButton'
import MyInput from '../Components/UI/input/MyInput'
import { AuthContext } from '../context/context'

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);
    const [isEmpty, setIsEmpty] = useState(true)

    const login = event => {
      if (!isEmpty) {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
        setIsEmpty(true)
      }
    }

  return (
    <div>
        <h1 className='login'>Log In</h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder="User name" onChange={() => setIsEmpty(false)}/>
            <MyInput type="password" placeholder="User password" onChange={() => setIsEmpty(false)}/>
            <MyButton isActive={!isEmpty}>Enter</MyButton>
        </form>
    </div>
  )
}

export default Login