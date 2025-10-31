import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = function(event){
        event.preventDefault();
        setUser({username, password});
        setUsername('');
        setPassword('');
    }
    return (
        <div>
            <h2>Login:</h2>
            <input 
                type="text" 
                placeholder='User name' 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {' '}
            <input 
                type="password" 
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login