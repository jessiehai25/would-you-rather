import {saveQuestion, saveQuestionAnswer} from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER_TO_QUESTION = 'SAVE_ANSWER_TO_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
	return {
		type:RECEIVE_QUESTIONS,
		questions
	}
}

function saveAnswerToQuestion (questions, { authedUser, qid, answer }){
	return{
		type: SAVE_ANSWER_TO_QUESTION,
		questions,
		authedUser
	}
}

export function handleSaveAnswerToQuestion (info){
	return (dispatch) => {
		return saveQuestionAnswer(info)
			.then((questions)=>{
				dispatch(saveAnswerToQuestion(questions, info))

			})
			
	}
}

function addQuestion (question){
	return{
		type: ADD_QUESTION,
		question
	}

}

export function handleAddQuestion (optionOneText, optionTwoText){
	return (dispatch, getState) => {
		const {authedUser} = getState()
		return saveQuestion({
			optionOneText,
			optionTwoText,
			author: authedUser
		})
		.then((question)=>dispatch(addQuestion(question)))
	}
}