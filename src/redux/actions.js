export const QUESTION_ANSWER = "QUESTION_ANSWER";
export const CHANGE_QUESTION = "CHANGE_QUESTION";
export const SUBMIT = "SUBMIT"; 

export function questionAnswer(index, answer) {
  return { type: QUESTION_ANSWER, payload: { index, answer } };
}
export function changeQuestion( isNext){
	return { type:CHANGE_QUESTION,  isNext: isNext };
}

export function submit (questions){
	return { type: SUBMIT, questions: questions };
}