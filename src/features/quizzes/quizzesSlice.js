import { createSlice } from '@reduxjs/toolkit';
import { addQuizForTopic } from '../topics/topicsSlice';

export const addQuizForTopicId = quiz => {
    const {topicId, id} = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizForTopic({topicId: topicId, quizId: id}));
    }
} 
const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
     reducers: {
         addQuiz(state, action) {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = { id, name, topicId, cardIds}
         }
     }
});

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;