import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/questions'

class NewQuestion extends Component{
	state = {
		optionOne: '',
		optionTwo: ''
	}
	handleChange = (e) => {
		const text = e.target.value
		const name = e.target.name

		this.setState(()=>({
			[name]: text
		}))
	}

	handleSubmit = (e) =>{
		e.preventDefault()
		const {optionOne, optionTwo} = this.state
		const {dispatch} = this.props
		dispatch(handleAddQuestion(optionOne, optionTwo))
		this.setState(()=> ({
					text:'',
				}))
	}
	render(){
		console.log(this.state)
		const {optionOne,optionTwo} = this.state
		return(
			<div>
				<h3 className = "center">Raise a New Question</h3>
				
				<form className = 'new-question' onSubmit={this.handleSubmit}>
				<div className = "bold">Would You Rather...</div>
				<textarea
					placeholder="Option 1"
					value = {optionOne}
					name = "optionOne"
					className = "textarea"
					onChange = {this.handleChange}
					maxLength={280}
				/>
				<div className = "center">OR</div>
				<textarea
					placeholder="Option 2"
					value = {optionTwo}
					name = "optionTwo"
					className = "textarea"
					onChange = {this.handleChange}
					maxLength={280}
				/>
				<button
					className = "submitBtn"
					type='submit'
					disabled = {optionOne ==='' || optionTwo === ''}>
					SUBMIT
				</button>
				</form>


			</div>
			)
	}

}

export default connect()(NewQuestion)