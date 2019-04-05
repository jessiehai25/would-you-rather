import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

class Nav extends Component {
	handleSignOut = (e)=>{
		e.preventDefault()
		const {dispatch} = this.props
		dispatch(setAuthedUser(null))
	}
	render(){
		const {Logined, authedUser} = this.props
		return(
			<nav className='nav'>
				<ul>
					<li>
						<NavLink to = '/dashboard' exact activeClassName = 'active' className = 'active'>
						Dashboard
						</NavLink>
					</li>
					<li>
						<NavLink to ='/new' activeClassName = 'active' className = 'active'>
						New Question
						</NavLink>
					</li>
					<li>
						<NavLink to ='/leaderboard' activeClassName = 'active' className = 'active'>
						Leader Board
						</NavLink>
					</li>
					{Logined === true
				          ? <div>
				          		Welcome, {authedUser} 
				          		<button onClick = {this.handleSignOut}>signout</button>
				          	</div>
				          : <NavLink to = '/' exact activeClassName = 'active'>
				              Login
				              </NavLink>
				     }
				</ul>
			</nav>

		)

	}

}

function mapStateToProps({authedUser}){
  return{
    Logined: authedUser !== null,
    authedUser
  }
}
export default connect(mapStateToProps)(Nav);