import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

export const userSlice = userSlice({
    name: "Akash",                                                                           //! unique name            
    initialState,                                                                           //! initial state
    reducers: {                                                                            //! reducers function
        setUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        deleteUser: (state, action) => {
            state.user = state.users.filter((user, index) => index !== action.payload)           //!another reducers function
        }



    }






})

export const { setUser, deleteUser } = userSlice.action

export default userSlice.reducers;