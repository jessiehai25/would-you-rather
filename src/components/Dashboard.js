import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionBtn from './QuestionBtn'
import Question from './Question'

class Dashboard extends Component {
	render(){
		console.log(this.props)
		const {answerIds, questionIds} = this.props
		const unanswerIds = questionIds.filter((id) => !answerIds.includes(id))

		return (
			<div>
				{this.props.loading === true
					? <div className="headline">Loading</div>
					: <div>

						<div className='center'>
							<h3>Would you Rather</h3>
							<h4>Answered</h4>
						</div>
						<ul className = 'questionList'>

							{answerIds.map((id) => (
								<li key = {id}>
									<QuestionBtn id={id} hasAnswered = {true}/>
								</li>
							))}
						</ul>
						<div className='center'>
							<h4>Unanswered</h4>
						</div>
						<ul className = 'questionList'>
							{unanswerIds.map((id) => (
								<li key = {id}>
									<QuestionBtn id={id} hasAnswered = {false}/>
								</li>
							))}
						</ul>
					</div>
				}
			</div>
			)
	}
}
 function mapStateToProps ({questions, users, authedUser}) {
 	return {
 		loading: authedUser === null,
 		answerIds: !users[authedUser]
 				?[]
 				:Object.keys(users[authedUser].answers)
 				.sort((a,b)=>questions[b].timestamp - questions[a].timestamp),
 		questionIds: Object.keys(questions)
 			.sort((a,b)=>questions[b].timestamp - questions[a].timestamp)
 		
 	}
 }

export default connect(mapStateToProps)(Dashboard)