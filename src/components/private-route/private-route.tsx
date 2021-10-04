import { Route, Redirect } from 'react-router-dom'
import React from 'react'
import { CustomModal } from './component'

const isExpired = (date: string) => {
  return new Date(Date.now()) >= new Date(date)
}
const PrivateRoute = ({ component, extraProps, ...rest }: any) => {
  const userDetails = localStorage.getItem('userDetails')

  if (userDetails) {
    if (isExpired(JSON.parse(userDetails).expiration)) {
      return <CustomModal />
    }
  }
  const routeComponent = (props: any) =>
    userDetails ? (
      React.createElement(component, { ...props, ...extraProps })
    ) : (
      <Redirect to={{ pathname: '/' }} />
    )
  return <Route {...rest} render={routeComponent} />
}

export default PrivateRoute
