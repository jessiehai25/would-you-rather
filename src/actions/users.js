export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION'
export const SAVE_USER_ANSWER_TO_QUESTION = 'SAVE_USER_ANSWER_TO_QUESTION'

export function receiveUsers (users) {
	return {
		type:RECEIVE_USERS,
		users
	}
}

export function userAddQuestion(question){
	return{
		type:USER_ADD_QUESTION,
		question
	}
}

export function saveUserAnswerToQuestion ({ authedUser, qid, answer }){
	return{
		type:SAVE_USER_ANSWER_TO_QUESTION,
		authedUser,
		qid,
		answer,
	}
}