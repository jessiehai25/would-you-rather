import {RECEIVE_QUESTIONS, SAVE_ANSWER_TO_QUESTION, ADD_QUESTION} from '../actions/questions'

export default function questions (state = {}, action) {
	console.log(action)
	switch(action.type){
		case RECEIVE_QUESTIONS :
			return {
				...state,
				...action.questions
			}

		case SAVE_ANSWER_TO_QUESTION :
			const {authedUser, qid, answer} = action
			return {
				...state,
		        [qid]: {
		          ...state[qid],
		          [answer]: {
		            ...state[qid][answer],
		            votes: state[qid][answer].votes.concat([authedUser])
		          }
				}
			}

		case ADD_QUESTION :
			return {
				...state,
				[action.question.id]:action.question,
			}
		
		default :
			return state
	}
}