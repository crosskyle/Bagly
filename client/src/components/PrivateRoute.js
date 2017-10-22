import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component: Component, ...rest, auth }) =>
{
  return (
  <Route {...rest} render={props => (
    auth.authenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/auth',
        state: { from: props.location }
      }}/>
    )
  )}/>
)}
function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, null)(PrivateRoute)

