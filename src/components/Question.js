import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatDate} from '../utils/helpers'
import {handleSaveAnswerToQuestion} from '../actions/questions'
import Result from './Result'

class Question extends Component{
	state = {
		selectedOption : ""
	}
	handleOptionChange = (e) => {
	  this.setState({
	    selectedOption: e.target.value
	  });

	}
	handleSubmitBtn = (e) => {
		e.preventDefault()
		const {dispatch, id, authedUser} = this.props
		dispatch(handleSaveAnswerToQuestion({
			qid: id,
			authedUser,
			answer: this.state.selectedOption
		}))
		this.setState(()=>({
			selectedOption: '',
		}))

	}

	render(){
		const {id, question, questioner, loading, hasAnswered} = this.props
		if (loading === true){
			return <p>Loading</p>
		}
		if (question === null){
			return <p>This question does not exist</p>
		}
		const {author, timestamp, optionOne, optionTwo} = question

		if (hasAnswered === true){
			return(
				<Result id = {id}/>
			)
		}

		return(
			<div className = 'question'>
					<div>
						<div className = 'questioner'>
							<span>{author} asks </span>
							<span>{formatDate(timestamp)}</span>
						</div>
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
									<input 
										type="radio" 
										name = "option"
										value="optionOne" 
										onChange={this.handleOptionChange} 
									/>{optionOne.text}
									<br/>
									<input 
										type="radio"
										name = "option"
										value="optionTwo" 
										onChange={this.handleOptionChange}
									/>{optionTwo.text}
								</div>
							
						</div>
						<div className = "margin-right">
							<button 
								className = "submitBtn"
								onClick = {this.handleSubmitBtn}
							>Submit</button>
						</div>
					</div>
				</div>
			)
	}
}

function mapStateToProps({authedUser, users, questions}, props){
	const{id} = props.match.params
	const question = questions[id]
	const questioner = question ? users[question.author] : null
	const answerIds= !users[authedUser]
 				?[]
 				:Object.keys(users[authedUser].answers)
 	

	return{
		loading: authedUser === null,
		question: question ? question : null,
		questioner,
		id: id,
		authedUser,
		hasAnswered: answerIds.includes(id)

	}
}


export default connect(mapStateToProps)(Question)

