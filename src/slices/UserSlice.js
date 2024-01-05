
import { createSlice } from '@reduxjs/toolkit';

const initialState =[ ]
const userDetailSlice = createSlice(
    {
        name:'userSlice',
        initialState:initialState,
        reducers:
        {
            addWeight:(state,action)=>{
                state.push(action.payload);
            }
        }
    }
);

export default userDetailSlice.reducer;
export const {addWeight} = userDetailSlice.actions;