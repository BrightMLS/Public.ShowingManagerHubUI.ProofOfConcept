import { Route, Redirect } from 'react-router-dom'
import React from 'react'
import { isPublicRoute } from 'utils'

const PublicRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    isPublicRoute() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/register-property' }} />
    )
  return <Route {...rest} render={routeComponent} />
}

export default PublicRoute
