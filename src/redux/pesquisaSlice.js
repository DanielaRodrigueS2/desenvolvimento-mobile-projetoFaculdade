import { createSlice } from "@reduxjs/toolkit"

const initialValues = {
    pesquisaId: null,
    nome: null,
    data: null, 
    imagem: null
}

export const pesquisaSlice = createSlice({
    name: 'pesquisa',
    initialState: initialValues,
    reducers: {
        reducerSetLogin: (state, action) => {
            state.pesquisaId = action.payload.pesquisaId
            state.nome = action.payload.nome
            state.data = action.payload.data
            state.imagem = action.payload.imagem
        }
    }
})

export const { reducerSetLogin } = pesquisaSlice.actions
export default pesquisaSlice.reducer