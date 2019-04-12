import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatDate} from '../utils/helpers'
import {Link} from 'react-router-dom'

class QuestionBtn extends Component{

	render(){

		const {question, questioner} = this.props

		if (question === null){
			return <p>This Question doesn't exist</p>
		}

		const {id, author, timestamp, optionOne, optionTwo} = question
		return(
			<Link to={`/question/${id}`} className="remove">

				<div className = 'question'>
					<div>
						<div className = 'questioner'>
							<span>{author} asks </span>
							<span>{formatDate(timestamp)}</span>
						</div>
					</div>
					<div className = "questionBox">
						<div className = 'questionBoxBtn'>
							<img 
								src = {questioner.avatarURL}
								alt = {`Avatar of ${author}`}
								className = "avatar"
							/>
							<div className="right">
								<b className="headline">Would You Rather...</b>
								<div className="radio">
									{optionOne.text}
									<br/>
									{optionTwo.text}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
			)
	}
}

function mapStateToProps({users, questions}, {id}){
	const question = questions[id]
	const questioner = question ? users[question.author] : null
	return{
		question: question ? question : null,
		questioner,
	}
}


export default connect(mapStateToProps)(QuestionBtn)