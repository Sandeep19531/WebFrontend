import {createSlice} from '@reduxjs/toolkit';

export const soldSlice = createSlice({
    name: 'search',
    initialState: {
        word: '',
        searchValue: ''
    },
    reducers: {
        setWord: (state,action) =>{
            // return{
            //     ...state,
            //     word: action.payload
            // }
            state.word = action.payload;
        },
        setSearchValue: (state,action) =>{
            return{
                ...state,
                searchValue: action.payload
            }
        },
        deleteWord: (state,action) =>{
            return{
                ...state,
                word: '',
                searchValue: '',
            }
        }
    }
})

export const { setWord, deleteWord, setSearchValue } = soldSlice.actions;

export default soldSlice.reducer;