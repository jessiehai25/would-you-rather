import {saveQuestion, saveQuestionAnswer} from '../utils/api'
import {userAddQuestion, saveUserAnswerToQuestion} from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER_TO_QUESTION = 'SAVE_ANSWER_TO_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
	return {
		type:RECEIVE_QUESTIONS,
		questions
	}
}

function saveAnswerToQuestion ({ authedUser, qid, answer }){
	return{
		type: SAVE_ANSWER_TO_QUESTION,
		authedUser,
		qid,
		answer,
	}
}

export function handleSaveAnswerToQuestion (info){
	return (dispatch) => {
		return saveQuestionAnswer(info)
			.then(()=>{
				dispatch(saveAnswerToQuestion(info))
				dispatch(saveUserAnswerToQuestion(info))

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
		.then((question)=>{
			dispatch(addQuestion(question))
			dispatch(userAddQuestion(question))
		})
	}
}