import {RECEIVE_USERS, USER_ADD_QUESTION, SAVE_USER_ANSWER_TO_QUESTION} from '../actions/users'


export default function users (state = {}, action) {
	switch(action.type){
		case RECEIVE_USERS :
			return {
				...state,
				...action.users
			}

		case USER_ADD_QUESTION :
			let questioner = {}
			questioner = {
				[action.question.author]:{
					...state[action.question.author],
					questions: state[action.question.author].questions.concat([action.question.id])
				}
			}

			return {
				...state,
				...questioner
			}

		case SAVE_USER_ANSWER_TO_QUESTION:
		let answerer = {}
		const answer = {
			[action.qid]: action.answer
		}
		const answers = {
			...state[action.authedUser].answers,
			...answer
		}
		answerer = {
			[action.authedUser]:{
				...state[action.authedUser],
				answers
			}
		}
		return {
			...state,
			...answerer
		}
		
		default :
			return state
	}
}