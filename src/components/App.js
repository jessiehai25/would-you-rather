import React, { Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import Dashboard from './Dashboard'
import Question from './Question'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import Nav from './Nav'
import ErrorPage from './ErrorPage'

const PrivateRoute = ({ Logined, component: Component, ...rest}) => (
<Route {...rest} render = {(props) => (
    Logined === true
      ? <Component {...props} />
      : <Redirect to = {{
          pathname: '/',
          state: {from: props.location}
        }}/>
  )}/>
)

class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}

  render() {
    const {Logined, authedUser} = this.props

    return (
      <Router>
      <div className = "container">
        <Nav/>

          <Switch>
              <Route path='/' exact component = {Login}/>
              <PrivateRoute Logined={Logined} path='/dashboard' component = {Dashboard}/>
              <PrivateRoute Logined={Logined} path='/leaderboard' component = {LeaderBoard}/>
              <PrivateRoute Logined={Logined} path='/add' component = {NewQuestion}/>
              <PrivateRoute Logined={Logined} path='/question/:id' component = {Question}/>  
              <PrivateRoute Logined={Logined} component = {ErrorPage}/>       
            </Switch>       
        </div>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}){
  return{
    Logined: authedUser !== null,
    authedUser
  }
}

export default connect(mapStateToProps)(App);
