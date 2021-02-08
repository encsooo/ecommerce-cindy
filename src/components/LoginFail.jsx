import React from 'react'

const LoginFail = (props) => {
    return (
        <div>
            <h1>Sorry, {props.location.name} the login failed</h1>
            <button onClick={() => props.history.push('/')}>Get me outta here</button>
        </div>
    )
}

export default LoginFail
