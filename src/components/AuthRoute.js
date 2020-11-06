import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { UserContext } from './context'

function AuthRoute(props) {
    const [user, setUser] = useContext(UserContext)
    return (
        <div>
            <Route exact path = {props.path}
			render={() => user? props.children:
			<Redirect to={{pathname:"/login"}}/>
			}/>
        </div>
    )
}

export default AuthRoute
