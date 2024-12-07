import { createSlice } from "@reduxjs/toolkit"

const initialValues = {
    userId: null,
    email: null
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialValues,
    reducers: {
        reducerSetLogin: (state, action) => {
            state.userId = action.payload.userId
            state.email = action.payload.email
        }
    }
})

export const { reducerSetLogin } = loginSlice.actions
export default loginSlice.reducer