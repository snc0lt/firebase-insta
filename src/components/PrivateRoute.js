import React, { useContext } from 'react'
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/user";

function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { myUser } = useContext(UserContext)
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!myUser ? (
          <RouteComponent {...routeProps} />
        ) : (
            <Redirect to={'/login'} />
          )
      }
    />
  )
}

export default PrivateRoute
