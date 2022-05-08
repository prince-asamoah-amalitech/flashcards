import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard(state, action) {
            const {id} = action.payload;
            state.cards[id] = action.payload;
        }
    }
});

export const selectCards = state => state.cards.cards;
export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;