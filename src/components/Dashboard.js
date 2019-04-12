import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionBtn from './QuestionBtn'

class Dashboard extends Component {
	state = {
		answered : 'false'
	}
	handleChange = (e) => {
		console.log("form",e.target, e.target.value)
			const text = e.target.value
			this.setState(()=>({
				answered : text
			}))
		}
	render(){
		console.log(this.props)
		const {answerIds, questionIds, notLogin} = this.props
		const unanswerIds = questionIds.filter((id) => !answerIds.includes(id))
		const {answered} = this.state
		return (
			<div>
			{console.log(this.state)}
				<div className='center'>
					<h3>Would you Rather</h3>
				</div>
				<form id='answered' className = 'center' >
					<select value = {this.state.answered} onChange = {this.handleChange}>
						<option value = 'false'>Unanswer</option>
						<option value = 'true'>Answer</option>
					</select>
				</form>
				<ul className = 'questionList'>
					{answered === 'true'
						?answerIds.map((id) => (
							<li key = {id}>
								<QuestionBtn id={id}/>
							</li>
						))
						:unanswerIds.map((id) => (
							<li key = {id}>
								<QuestionBtn id={id}/>
							</li>
						))
					}
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