import { configureStore } from '@reduxjs/toolkit'
import { api } from '../services/weatherAPI'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>