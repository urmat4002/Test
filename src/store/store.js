import {configureStore} from '@reduxjs/toolkit'
import {testReducer} from './slice'

export const store = configureStore({reducer: {test: testReducer}})
