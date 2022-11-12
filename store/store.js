'use client'

import { configureStore } from '@reduxjs/toolkit'
import { navigation } from '../components/layout/Navbar/Navbar'

import navigationSlice from './slices/navigation.slice'

const store = configureStore({
  reducer: {
    navigation: navigationSlice.reducer,
  },
})

export default store
