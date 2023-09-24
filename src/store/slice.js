import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  test: [
    {
      quetion: 'Какой цвет лишний?',
      variants: ['красный', 'зеленный', 'белый', 'филолетовый'],
      correct: 'белый',
      id: 1,
    },
    {
      quetion: 'Рекурсия что это?',
      variants: [
        'Передача одной функции в другую',
        'Запоминание переменных родительской функции',
        'Определение функции внутри другой функции',
        'Вызов функцией самой себя',
      ],
      correct: 'Вызов функцией самой себя',
      id: 2,
    },
  ],
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    editTest: (state, action) => {
      state = action.payload
    },
    addTest: (state, action) => {
      state.test.push(action.payload)
    },
    deleteTest: (state, action) => {
      state.test = state.test.filter((item) => item.id != action.payload)
    },
  },
})

export const {editTest, addTest, deleteTest} = testSlice.actions
export const testReducer = testSlice.reducer
