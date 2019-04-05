import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser'

class Login extends Component{
	state = {
		username: '',
		toReferror: false,
		reTry: false,
	}
	handleChange = (e) => {
		const text = e.target.value
		this.setState(()=>({
			username: text
		}))
	}
	handleBtn = (e) => {
		e.preventDefault()
		const text = e.target.value
		const {username} = this.state
		const {users} = this.props
		const {dispatch} = this.props
		if (users.includes(username)){
			dispatch(setAuthedUser(username))
			this.setState(()=>({
				username: '',
				toReferror: true,
			}))
		}
		else{
			this.setState(()=>({
				username: '',
				reTry: true,
			}))
		}

	}
	render(){
		const {username, toReferror, reTry} = this.state
		const {login, users} = this.props
		const {from} = this.props.location.state || { from: {pathname: '/dashboard'}}

		if (toReferror === true) {
			return(
				<Redirect to={from}/>
			)
		}

		return(
			<div className = "login-box">
				<div className= "center">
					<h3>User Login</h3>
					
					<img 
						src="https://img.icons8.com/ultraviolet/80/000000/user.png"
					/>
					{reTry === true
						?<div className="red"> Please try again </div>
						:<br/>
					}
					<br/>	
					<input 
						placeholder= "Input your Username"
						value = {username}
						className = "textarea"
						onChange = {this.handleChange}
						/>
					<button 
						className="submitBtn"
						onClick = {this.handleBtn}
					>Login</button>
				</div>
			</div>	
		)
	}
}

function mapStateToProps({authedUser, users}){
  return{
    login: authedUser !== null,
    users: Object.keys(users)
  }
}



export default connect(mapStateToProps)(Login)