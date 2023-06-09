import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: []
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, {payload})=> {
            state.users.push(payload)
        },

        deleteUser: (state, {payload})=> {
            state.users = state.users.filter(user=> user.id !== payload)
        }
    }
})

export const { addUser,  deleteUser} = usersSlice.actions

export const usersReducer = usersSlice.reducer