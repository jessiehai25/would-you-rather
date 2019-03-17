import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatDate} from '../utils/helpers'

class Result extends Component{
	render(){
		const {question, questioner, loading, authedUser} = this.props
		if (loading === true){
			return <p>Loading</p>
		}
		if (question === null){
			return <p>This question does not exist</p>
		}
		const {author, timestamp, optionOne, optionTwo} = question
		const voteOne = optionOne.votes.length
		const voteTwo = optionTwo.votes.length

		const totalAnswer = optionOne.votes.length + optionTwo.votes.length
		const percentageOne = voteOne/totalAnswer*100
		const percentageTwo = voteTwo/totalAnswer*100
		return(
				<div className = 'question'>
					<div className = 'questioner'>
						<span>{author} asks </span>
						<span>{formatDate(timestamp)}</span>
					</div>
					<div className = 'questionBox'>
						<img 
							src = {questioner.avatarURL}
							alt = {`Avatar of ${author}`}
							className = "avatar"
						/>
						<div className="right">
							<b className="headline">Would You Rather...</b>
							
								<div className="radio">
									{optionOne.votes.includes(authedUser)
										?<div>
											<div className="selectedResult">
												<div className = "result">
													<div>{optionOne.text}</div>
													<div>{percentageOne}%</div>
												</div>
												{voteOne} out of {totalAnswer} vote(s)
											</div>
											<br/>
												<div className = "unselectedResult">
													<div className = "result">
														<div>{optionTwo.text}</div>
														<div>{percentageTwo}%</div>
													</div>
													{voteTwo} out of {totalAnswer} vote(s)
												</div>
											
										</div>
										:<div>
											<div className = "unselectedResult">
												<div className = "result">
													<div>{optionOne.text}</div>
													<div>{percentageOne}%</div>
												</div>
												{voteOne} out of {totalAnswer} vote(s)
											</div>
											<br/>
											<div className="selectedResult">
												<div className = "result">
													<div>{optionTwo.text}</div>
													<div>{percentageTwo}%</div>
												</div>
											{voteTwo} out of {totalAnswer} vote(s)
											</div>
										</div>
											
									}
								</div>
							
						</div>
					</div>
				</div>
			)
	}

}

function mapStateToProps({authedUser, users, questions}, {id}){
	const question = questions[id]
	const questioner = question ? users[question.author] : null
	return{
		loading: authedUser === null,
		question: question ? question : null,
		questioner,
		id: id,
		authedUser
	}
}

export default connect(mapStateToProps)(Result)