import React, {Component} from 'react'
import {connect} from 'react-redux'

class LeaderBoard extends Component {
	render(){
		const {users, usersRank, notLogin} = this.props
		return( 
			<div>
				<div className="center">
					<h3>LeaderBoard</h3>
				</div>
				<ul className = 'questionList'>
					{usersRank.map((user)=>(

						<div className = "user-box">
							<li key = {users[user].id}>
								<div className = "username">{user}</div>
								<div className = "bottom">

									<div className = "left">
										<img 
											src = {users[user].avatarURL}
											alt = {`Avatar of ${user}`}
											className = "avatar"
										/>
										<div className = "info">
											<br/>
											Number of Questions Raised: {users[user].questions.length}
											<br/>
											Number of Questions Answered: {Object.keys(users[user].answers).length}
										</div>
									</div>
									<div className = "score-box">
										Score
									<div className = "score">
										{users[user].questions.length+Object.keys(users[user].answers).length}
									</div>
									</div>
								</div>
							</li>
						</div>
					))}
				</ul>
			</div>

		)
	}
}

function mapStateToProps({users, authedUser}){
	return{
	notLogin: authedUser === null,
	users,
	usersRank: !users[authedUser]
 				?[]
 				:Object.keys(users)
 					.sort((a,b)=>users[b].questions.length + Object.keys(users[b].answers).length - users[a].questions.length - Object.keys(users[a].answers).length),
 	}
}

export default connect(mapStateToProps)(LeaderBoard)