import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        value: false
    },
    reducers: {
        switcher: state => {
            state.value = !state.value
        }
    }
})

// Action creators are generated for each case reducer function
export const { switcher } = menuSlice.actions

export default menuSlice.reducer