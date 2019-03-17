import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import {formatDate} from '../utils/helpers'

class QuestionBtn extends Component{

	toQuestion = (e,id) => {
		e.preventDefault()
		console.log("Button Clicked", id)
		//send to answer/result
	}

	render(){

		const {question, hasAnswered, questioner} = this.props

		if (question === null){
			return <p>This Question doesn't exist</p>
		}

		const {id, author, timestamp, optionOne, optionTwo} = question
		return(
			<div>

				<div className = 'question'>
					<div>
						<div className = 'questioner'>
							<span>{author} asks </span>
							<span>{formatDate(timestamp)}</span>
						</div>
					</div>
					<div className = "questionBox">
						<div className = 'questionBoxBtn' onClick={(e)=>this.toQuestion(e,id)}>
							<img 
								src = {questioner.avatarURL}
								alt = {`Avatar of ${author}`}
								className = "avatar"
							/>
							<div className="right">
								<b className="headline">Would You Rather...</b>
								<div className="radio">
									<input type="radio" value="1" name="Option1"/>{optionOne.text}
									<br/>
									<input type="radio" value="2" name="Option2"/>{optionTwo.text}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
	}
}

function mapStateToProps({users, questions}, {id, hasAnswered}){
	const question = questions[id]
	const questioner = question ? users[question.author] : null
	return{
		question: question ? question : null,
		hasAnswered,
		questioner,
	}
}


export default connect(mapStateToProps)(QuestionBtn)