import { configureStore, createSlice } from "@reduxjs/toolkit"
import { loginSlice } from "./loginSlice"
import { pesquisaSlice } from "./pesquisaSlice"

export const store = configureStore({
    reducer: {
        login: loginSlice,
        pesquisa: pesquisaSlice
    }
})