import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionBtn from './QuestionBtn'

class Dashboard extends Component {
	render(){
		console.log(this.props)
		const {answerIds, questionIds, notLogin} = this.props
		const unanswerIds = questionIds.filter((id) => !answerIds.includes(id))

		return (
			<div>
				<div className='center'>
					<h3>Would you Rather</h3>
					<h4>Answered</h4>
				</div>
				<ul className = 'questionList'>

					{answerIds.map((id) => (
						<li key = {id}>
							<QuestionBtn id={id}/>
						</li>
					))}
				</ul>
				<div className='center'>
					<h4>Unanswered</h4>
				</div>
				<ul className = 'questionList'>
					{unanswerIds.map((id) => (
						<li key = {id}>
							<QuestionBtn id={id}/>
						</li>
					))}
				</ul>
			</div>
			)
	}
}
 function mapStateToProps ({questions, users, authedUser}) {
 	return {
 		answerIds: !users[authedUser]
 				?[]
 				:Object.keys(users[authedUser].answers)
 				.sort((a,b)=>questions[b].timestamp - questions[a].timestamp),
 		questionIds: Object.keys(questions)
 			.sort((a,b)=>questions[b].timestamp - questions[a].timestamp)
 		
 	}
 }

export default connect(mapStateToProps)(Dashboard)