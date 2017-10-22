import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../actions'
import { Route, Redirect } from 'react-router-dom'


class PrivateRoute extends Component {

  componentWillMount() {
    //this.props.authenticate()
  }


  render() {
    const { path, auth } = this.props
    const Component = this.props.component

    return (
      <Route {...path} render={(props) => (
        auth.authenticated ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )
  }
}


function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { authenticate })(PrivateRoute)

